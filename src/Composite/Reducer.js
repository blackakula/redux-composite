import WalkComposite from '../Helper/WalkComposite';
import ReduxAction from '../Helper/ReduxAction';

const Reducer = compositeStructure => (state, action) => WalkComposite()(
    (composite, state, action) => state === undefined || action !== undefined
        ? composite.reducer(state, action)
        : state
)(
    compositeStructure,
    state,
    ReduxAction(action)
);
export default Reducer;
