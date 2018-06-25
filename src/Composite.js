import WalkComposite from './Helper/WalkComposite';
import Reducer from './Composite/Reducer';
import Middleware from './Composite/Middleware';
import Equality from './Composite/Equality';
import Subscribe from './Composite/Subscribe';
import Redux from './Composite/Redux';
import Memoize from './Composite/Memoize';
import InitRedux from './Redux';
import InitMemoize from './Memoize';

const defaultEquality = (prev, next) => prev === next;

const defaultMiddleware = () => next => action => next(action);

const applyMiddleware = middlewares => {
    if (middlewares.length === 0) {
        return defaultMiddleware;
    } else if (middlewares.length === 1) {
        return middlewares[0];
    }
    return ({dispatch, getState}) => {
        const chain = middlewares.map(middleware => middleware({dispatch, getState})).reverse();
        return next => chain.reduce((resultMiddleware, middleware) => middleware(resultMiddleware), next)
    };
};


export const Wrappers = {
    Subscribe: (originalSubscribe, equality) => (dispatch, getState, subscribe = undefined) => listeners => {
        if (listeners === undefined) {
            return () => {};
        }
        const initializedSubscribe = originalSubscribe(dispatch, getState)(listeners);
        let state = getState();
        const listener = () => {
            const next = getState();
            if (!(equality === undefined ? defaultEquality : equality)(state, next)) {
                state = next;
                initializedSubscribe();
            }
        };
        return typeof subscribe === 'function' ? subscribe(listener) : listener;
    },
    Memoize: (originalMemoize, equality) => getState => {
        const resolvedMemoize = originalMemoize(getState);
        return {
            ...resolvedMemoize,
            memoize: callback => {
                let state = undefined,
                    result = undefined;
                return (...parameters) => {
                    const next = getState();
                    if (!(equality === undefined ? defaultEquality : equality)(state, next)) {
                        state = next;
                        result = resolvedMemoize.memoize(callback)(...parameters);
                    }
                    return result;
                }
            }
        };
    }
};

class Composite
{
    constructor(data) {
        const {structure, reducer, middleware, equality, subscribe, redux, memoize} = data;

        if (structure === undefined && typeof reducer !== 'function') {
            throw {
                message: "Not valid parameters: should be either structure or reducer"
            }
        }

        const compositeStructure = structure === undefined
            ? undefined
            : WalkComposite({}, true)(
                leaf => typeof leaf === 'function'
                    ? new Composite({reducer: leaf})
                    : leaf
            )(structure);

        const injection = (parameter, withStructure, withoutStructure, wrapper) => {
            if (typeof parameter === 'function') {
                return structure === undefined
                    ? parameter
                    : parameter(compositeStructure)
            }
            const beforeWrapper = structure === undefined
                ? withoutStructure
                : withStructure(compositeStructure);
            return wrapper === undefined ? beforeWrapper : wrapper(beforeWrapper);
        };

        this.reducer = injection(reducer, Reducer);
        this.middleware = injection(
            structure === undefined && typeof middleware === 'object' && Array.isArray(middleware)
                ? applyMiddleware(middleware.filter(oneMiddleware => typeof oneMiddleware === 'function'))
                : middleware,
            Middleware,
            defaultMiddleware
        );
        this.equality = injection(
            equality,
            Equality,
            defaultEquality
        );
        this.subscribe = injection(
            subscribe,
            Subscribe,
            (dispatch, getState) => listener => () => listener({dispatch, getState}),
            (equality => originalSubscriber => Wrappers.Subscribe(originalSubscriber, equality))(this.equality)
        );

        this.redux = injection(
            redux,
            Redux,
            (dispatch, getState, subscribe) => ({
                redux: {dispatch, getState, subscribe}
            })
        );

        this.memoize = injection(
            memoize,
            Memoize,
            getState => ({memoize: callback => callback}),
            (equality => originalMemoize => Wrappers.Memoize(originalMemoize, equality))(this.equality)
        );

        this.init = reduxStore => (composite => {
            composite.memoize = InitMemoize(composite.memoize, reduxStore.getState);
            const {store, structure} = InitRedux(composite)(reduxStore);
            delete composite.redux;
            composite.store = structure;
            composite.getState = store.getState
            composite.dispatch = store.dispatch;
            composite.subscribe = store.subscribe;
            return composite;
        })(this)
    }
}

export default Composite;
