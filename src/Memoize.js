import {Walk, Defaults} from 'walk-composite';
import {MutateMethod} from './Helper/ReduxAction';

const useStructure = memoize => typeof memoize.memoize === 'function' && memoize.structure !== undefined

const MemoizeWalk = (originalMemoize, parameters = {}) => Walk({
    leafCondition: memoize => typeof memoize.memoize === 'function'
        && (memoize.structure === undefined || memoize !== originalMemoize),
    keysMethod: memoize => Defaults.KeysMethod(useStructure(memoize) ? memoize.structure : memoize),
    mutationMethod: key => (memoize, memoizeStructure, dispatch, getState, subscribe) => [
        (useStructure(memoize) ? memoize.structure : memoize)[key],
        (structure => structure !== undefined && structure[key] !== undefined ? structure[key] : undefined)(useStructure(memoize) ? memoizeStructure.structure : memoizeStructure),
        MutateMethod(dispatch, key),
        () => getState()[key],
        listeners => subscribe({[key]: listeners})
    ],
    reducerMethod: {
        add: Defaults.ReducerMethod.add,
        init: memoize => Defaults.ReducerMethod.init(useStructure(memoize) ? memoize.structure : memoize)
    },
    walkMethod: parameters => MemoizeWalk(originalMemoize, parameters),
    ...parameters
})

const MemoizeByMemoize = memoize => ({dispatch, getState, subscribe}) => {
    return memoizationStructure => {
        const structure = MemoizeWalk(memoize)(
            (memoize, structure, dispatch, getState, subscribe) => structure === undefined ? undefined : (memoized => memoize.structure === undefined ? memoized : MemoizeByMemoize(memoize)({dispatch, getState, subscribe})(structure))(memoize.memoize(() => structure({
                dispatch,
                getState,
                structure,
                subscribe
            })))
        )(memoize, memoizationStructure, dispatch, getState, subscribe)
        return {
            structure,
            ...(memoizationStructure => typeof memoizationStructure === 'function' ? {
                memoize: memoize.memoize(() => memoizationStructure({structure, dispatch, getState, subscribe}))
            } : {})(typeof memoizationStructure === 'function' ? memoizationStructure : memoizationStructure.memoize)
        }
    }
}

export const Memoize = (memoize, store) => MemoizeByMemoize(memoize(store.getState))(store)

export default Memoize
