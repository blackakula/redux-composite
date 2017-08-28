const ReduxAction = action => typeof action === 'object' && action.type === 'COMPOSITE' ? action.composite : action;
const InitAction = callback => action => callback({type: 'COMPOSITE', composite: action});
const MutateMethod = (callback, key) => action => callback({[key]: action});

export {ReduxAction, InitAction, MutateMethod};
export default ReduxAction;
