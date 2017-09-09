export const Redux = composite => ({dispatch, getState, subscribe}) => composite.redux(
    dispatch,
    getState,
    composite.subscribe(dispatch, getState, subscribe)
).structure;

export default Redux;
