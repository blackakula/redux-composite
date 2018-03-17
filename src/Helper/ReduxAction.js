import DefaultMutationMethod from './DefaultMutationMethod';

const ReduxAction = action => typeof action === 'object' && action.type === 'COMPOSITE' ? action.composite : action;
const InitAction = callback => action => callback({type: 'COMPOSITE', composite: action});
const MutateMethod = (callback, key) => action => callback({[key]: action});
const ActionMutateMethod = (action, key) => typeof action === 'object' && typeof action.type === 'string' && action.type.indexOf('@@') === 0
    ? action
    : DefaultMutationMethod(key)(action);

export {ReduxAction, InitAction, MutateMethod, ActionMutateMethod};
export default ReduxAction;
