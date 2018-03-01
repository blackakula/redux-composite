import WalkComposite from '../Helper/WalkComposite';
import {ReduxAction, InitAction, MutateMethod} from '../Helper/ReduxAction';
import DefaultMutationMethod from '../Helper/DefaultMutationMethod';
import InitWalk from '../Helper/InitWalk';

const Middleware = compositeStructure => ({dispatch, getState}) => {
    const initMiddleware = InitWalk()(
        (composite, dispatch, getState) => composite.middleware({getState, dispatch})
    )(
        compositeStructure,
        dispatch,
        getState
    );
    return next => {
        const initNextMiddleware = WalkComposite({
            mutationMethod: key => (composite, next, middleware) => [
                DefaultMutationMethod(key)(composite),
                MutateMethod(next, key),
                DefaultMutationMethod(key)(middleware)
            ]
        })(
            (composite, next, middleware) => middleware(next)
        )(
            compositeStructure,
            InitAction(next),
            initMiddleware
        );
        return action => action === undefined
            ? next(action)
            : WalkComposite()(
                (composite, next, action) => action === undefined ? undefined : next(action)
            )(
                compositeStructure,
                initNextMiddleware,
                ReduxAction(action)
            );
    };
};

export default Middleware;
