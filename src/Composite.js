import WalkComposite from './Helper/WalkComposite';
import Reducer from './Composite/Reducer';
import Middleware from './Composite/Middleware';
import Equality from './Composite/Equality';
import Subscribe from './Composite/Subscribe';
import Redux from './Composite/Redux';
import Memoize from './Composite/Memoize';

class Composite
{
    constructor(data) {
        const {structure, reducer, middleware, equality, subscribe, redux, memoize, custom} = data;
        const middlewareWrapper = middleware => ({dispatch, getState}) => next => action => {
            return action === undefined
                ? next(action)
                : middleware({dispatch, getState})(next)(action);
        };
        const subscribeWrapper = originalSubscribe => equality => (dispatch, getState, subscribe = undefined) => listeners => {
            if (listeners === undefined) {
                return () => {};
            }
            const initializedSubscribe = originalSubscribe(dispatch, getState)(listeners);
            let state = getState();
            const listener = () => {
                const next = getState();
                if (!equality(state, next)) {
                    state = next;
                    initializedSubscribe();
                }
            };
            return typeof subscribe === 'function' ? subscribe(listener) : listener;
        };
        const memoizeWrapper = originalMemoize => equality => getState => {
            const resolvedMemoize = originalMemoize(getState);
            return {
                ...resolvedMemoize,
                memoize: callback => {
                    if (callback === undefined) {
                        return () => {};
                    }
                    let state = getState(),
                        result = undefined;
                    return (...parameters) => {
                        const next = getState();
                        if (result === undefined || !equality(state, next)) {
                            state = next;
                            result = resolvedMemoize.memoize(callback)(...parameters);
                        }
                        return result;
                    }
                }
            };
        };

        if (structure === undefined) {
            if (typeof reducer !== 'function') {
                throw {
                    message: "Not valid parameters: should be either structure or reducer"
                }
            }
            this.reducer = reducer;
            this.middleware = typeof middleware === 'function'
                ? middleware
                : middlewareWrapper(() => next => action => next(action));
            this.equality = typeof equality === 'function'
                ? equality
                : (prev, next) => prev === next;
            this.subscribe = typeof subscribe === 'function'
                ? subscribe
                : subscribeWrapper((dispatch, getState) => listener => () => listener({dispatch, getState}))(this.equality);
            this.redux = typeof redux === 'function'
                ? redux
                : (dispatch, getState, subscribe) => ({
                    redux: {dispatch, getState, subscribe}
                });
            this.memoize = typeof memoize === 'function'
                ? memoize
                : memoizeWrapper(getState => ({memoize: callback => callback}))(this.equality)
        } else {
            const compositeStructure = WalkComposite({}, true)(
                leaf => typeof leaf === 'function'
                    ? new Composite({reducer: leaf})
                    : leaf
            )(structure);
            this.reducer = custom === undefined || typeof custom.reducer !== 'function'
                ? Reducer(compositeStructure)
                : custom.reducer(compositeStructure);
            this.middleware = custom === undefined || typeof custom.middleware !== 'function'
                ? middlewareWrapper(Middleware(compositeStructure))
                : custom.middleware(compositeStructure);
            this.equality = custom === undefined || typeof custom.equality !== 'function'
                ? Equality(compositeStructure)
                : custom.equality(compositeStructure);
            this.subscribe = custom === undefined || typeof custom.subscribe !== 'function'
                ? subscribeWrapper(Subscribe(compositeStructure))(this.equality)
                : custom.subscribe(compositeStructure);
            this.redux = custom === undefined || typeof custom.redux !== 'function'
                ? Redux(compositeStructure)
                : custom.redux(compositeStructure);
            this.memoize = custom === undefined || typeof custom.memoize !== 'function'
                ? memoizeWrapper(Memoize(compositeStructure))(this.equality)
                : custom.memoize(compositeStructure);
        }
    }
}

export default Composite;
