import WalkComposite from '../Helper/WalkComposite';
import {ReduxAction, InitAction, MutateMethod} from '../Helper/ReduxAction';
import DefaultMutationMethod from '../Helper/DefaultMutationMethod';

const Redux = compositeStructure => (dispatch, getState, subscribe) => {
    const redux = {dispatch, getState, subscribe};
    const structure = WalkComposite({
        mutationMethod: key => (composite, dispatch, getState, subscribe) => [
            DefaultMutationMethod(key)(composite),
            MutateMethod(dispatch, key),
            () => getState()[key],
            listeners => subscribe({[key]: listeners})
        ]
    })(
        (composite, dispatch, getState, subscribe) => composite.redux(dispatch, getState, subscribe)
    )(
        compositeStructure,
        dispatch,
        getState,
        subscribe
    );
    return {
        redux,
        structure
    };
};

export default Redux;
