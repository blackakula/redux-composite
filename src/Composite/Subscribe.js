import InitWalk from '../Helper/InitWalk';
import WalkComposite from '../Helper/WalkComposite';

const Subscribe = compositeStructure => (dispatch, getState) => listeners => {
    const initSubscribe = InitWalk()(
        (composite, dispatch, getState, listener) => composite.subscribe(dispatch, getState)(listener)
    )(
        compositeStructure,
        dispatch,
        getState,
        listeners
    );
    return () => WalkComposite()(
        (composite, subscribe) => subscribe()
    )(
        compositeStructure,
        initSubscribe
    )
};

export default Subscribe;
