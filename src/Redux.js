import {Walk, Defaults} from 'walk-composite';

const useStructure = node => typeof node.redux === 'object' && node.structure !== undefined

const WalkRedux = (originalStore, parameters = {}) => Walk({
    leafCondition: node => node.redux !== undefined
        && (node.structure === undefined || originalStore !== node),
    keysMethod: node => Defaults.KeysMethod(useStructure(node) ? node.structure : node),
    mutationMethod: key => node => [(useStructure(node) ? node.structure : node)[key]],
    walkMethod: parameters => WalkRedux(originalStore, parameters),
    ...parameters
})

const ReduxByRedux = redux => ({
    structure: WalkRedux(redux)(leaf => useStructure(leaf) ? ReduxByRedux(leaf) : leaf.redux)(redux),
    store: redux.redux
});

export const Redux = composite => ({dispatch, getState, subscribe}) => ReduxByRedux(composite.redux(
    dispatch,
    getState,
    composite.subscribe(dispatch, getState, subscribe)
))

export default Redux;
