import WalkComposite from '../Helper/WalkComposite';
import {ReduxAction, ActionMutateMethod} from '../Helper/ReduxAction';
import DefaultMutationMethod from "../Helper/DefaultMutationMethod";

const Reducer = compositeStructure => (state, action) => WalkComposite({
    mutationMethod: key => (composite, state, action) => [
        DefaultMutationMethod(key)(composite),
        DefaultMutationMethod(key)(state),
        ActionMutateMethod(action, key)
    ]
})(
    (composite, state, action) => state === undefined || action !== undefined
        ? composite.reducer(state, action)
        : state
)(
    compositeStructure,
    state,
    ReduxAction(action)
);
export default Reducer;
