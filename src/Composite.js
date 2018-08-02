import WalkComposite from './Helper/WalkComposite';
import Reducer from './Composite/Reducer';
import Middleware from './Composite/Middleware';
import Equality from './Composite/Equality';
import Subscribe from './Composite/Subscribe';
import Redux from './Composite/Redux';
import Memoize from './Composite/Memoize';
import InitRedux from './Redux';
import InitMemoize from './Memoize';
import Reduce from './Prettify/Reduce';
import Expand from './Prettify/Expand';

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
                leaf => {
                    if (typeof leaf === 'function') {
                        return new Composite({reducer: leaf})
                    }
                    if (leaf instanceof Composite && typeof leaf.uglify === 'function') {
                        leaf.uglify();
                    }
                    return leaf;
                }
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

        const Prettify = ({reduce, expand} = {}) => {
            reduce = typeof reduce === 'function' ? reduce : Reduce;
            expand = typeof expand === 'function' ? expand : Expand;
            const r = this.reducer;
            const m = this.middleware;
            this.reducer = (state, action) => r(state, expand(action))
            this.middleware = store => next => action => m(store)(action => next(reduce(action)))(action)
            this.uglify = () => {
                this.reducer = r;
                this.middleware = m;
                delete this.uglify;
            }
        }

        const Init = (reduxStore, initRedux, initMemoize) => composite => {
            const {store, structure} = (store => store(composite)(reduxStore))(initRedux);
            composite.memoize = (memoize => memoize(composite.memoize, store))(initMemoize);
            delete composite.reducer;
            delete composite.middleware;
            delete composite.redux;
            delete composite.equality;
            composite.store = structure;
            composite.getState = store.getState
            composite.dispatch = store.dispatch;
            composite.subscribe = store.subscribe;
            return composite;
        }

        this.createStore = ({createStore = undefined, init = {}, prettify = {}} = {}) => (reducer, preloadedState, enhancer) => {
            // Prettify
            if (typeof prettify === 'object') {
                const reduce = typeof prettify.reduce === 'function' ? prettify.reduce : Reduce;
                const expand = typeof prettify.expand === 'function' ? prettify.expand : Expand;
                Prettify({reduce, expand});
            }

            // Create Store
            if (typeof createStore !== 'function') {
                createStore = require('redux').createStore;
            }
            reducer = typeof reducer === 'function' ? reducer(this.reducer) : this.reducer;
            if (typeof preloadedState === 'function' && enhancer === undefined) {
                enhancer = preloadedState;
                preloadedState = undefined
            }
            enhancer = typeof enhancer === 'function' ? enhancer(this.middleware) : require('redux').applyMiddleware(this.middleware)
            let Store = createStore(reducer, preloadedState, enhancer);

            // Init
            const initRedux = typeof init.store === 'function' ? init.store : InitRedux
            const initMemoize = typeof init.memoize === 'function' ? init.memoize : InitMemoize
            Init(Store, initRedux, initMemoize)(this);

            // Clean-up
            delete this.createStore;
            return Store;
        }
    }
}

export default Composite;
