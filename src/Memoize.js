import {Walk, Defaults} from 'walk-composite';

const useStructure = memoize => typeof memoize.memoize === 'function' && memoize.structure !== undefined

const MemoizeWalk = (originalMemoize, parameters = {}) => Walk({
    leafCondition: memoize => typeof memoize.memoize === 'function'
        && (memoize.structure === undefined || memoize !== originalMemoize),
    keysMethod: memoize => Defaults.KeysMethod(useStructure(memoize) ? memoize.structure : memoize),
    mutationMethod: key => (memoize, memoizeStructure, getState) => [
        (useStructure(memoize) ? memoize.structure : memoize)[key],
        (structure => structure !== undefined && structure[key] !== undefined ? structure[key] : undefined)(useStructure(memoize) ? memoizeStructure.structure : memoizeStructure),
        () => getState()[key]
    ],
    walkMethod: parameters => MemoizeWalk(originalMemoize, parameters),
    ...parameters
})

const MemoizeByMemoize = memoize => getState => {
    return memoizationStructure => {
        const structure = MemoizeWalk(memoize)(
            (memoize, structure, getState) => structure === undefined ? undefined : (memoized => memoize.structure === undefined ? memoized : MemoizeByMemoize(memoize)(getState)(structure))(memoize.memoize(() => structure({
                getState,
                structure
            })))
        )(memoize, memoizationStructure, getState)
        return {
            structure,
            ...(memoizationStructure => typeof memoizationStructure === 'function' ? {
                memoize: memoize.memoize(() => memoizationStructure({structure, getState}))
            } : {})(typeof memoizationStructure === 'function' ? memoizationStructure : memoizationStructure.memoize)
        }
    }
}

export const Memoize = (memoize, getState) => MemoizeByMemoize(memoize(getState))(getState)

export default Memoize
