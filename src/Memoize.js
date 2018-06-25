import {Walk, Defaults} from 'walk-composite';

const useStructure = memoize => typeof memoize.memoize === 'function' && memoize.structure !== undefined

const MemoizeWalk = (parameters = {}) => Walk({
    leafCondition: memoize => typeof memoize.memoize === 'function' && memoize.structure === undefined,
    keysMethod: memoize => {
        return Defaults.KeysMethod(useStructure(memoize) ? memoize.structure : memoize)
    },
    mutationMethod: key => (memoize, memoizeStructure, getState) => [
        (useStructure(memoize) ? memoize.structure : memoize)[key],
        (structure => structure !== undefined && structure[key] !== undefined ? structure[key] : undefined)(useStructure(memoize) ? memoizeStructure.structure : memoizeStructure),
        () => getState()[key]
    ],
    walkMethod: parameters => MemoizeWalk(parameters),
    ...parameters
})

export const Memoize = composite => getState => {
    const memoize = composite.memoize(getState)
    return memoizationStructure => {
        const structure = MemoizeWalk()(
            (memoize, structure, getState) => structure === undefined ? undefined : memoize.memoize(() => structure({
                getState,
                structure
            }))
        )(memoize, memoizationStructure, getState)
        return {
            structure,
            ...(memoizationStructure => typeof memoizationStructure === 'function' ? {
                memoize: memoize.memoize(() => memoizationStructure({structure, getState}))
            } : {})(typeof memoizationStructure === 'function' ? memoizationStructure : memoizationStructure.memoize)
        }
    }
}

export default Memoize
