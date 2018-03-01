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

        const injection = (parameter, withStructure, withoutStructure, native) => typeof parameter === 'function'
            ? (structure === undefined ? parameter : parameter(compositeStructure))
            : (native === undefined ? a => a : native)(
                structure === undefined
                    ? withoutStructure
                    : withStructure(compositeStructure)
            );

        this.reducer = injection(reducer, Reducer);
        this.middleware = injection(
            middleware,
            Middleware,
            () => next => action => next(action),
            middlewareCallback => (middleware => ({dispatch, getState}) => next => action => action === undefined
                ? next(action)
                : middleware({dispatch, getState})(next)(action))(middlewareCallback)
        );
        this.equality = injection(
            equality,
            Equality,
            (prev, next) => prev === next
        );
        this.subscribe = injection(
            subscribe,
            Subscribe,
            (dispatch, getState) => listener => () => listener({dispatch, getState}),
            subscribeCallback => (originalSubscribe => equality => (dispatch, getState, subscribe = undefined) => listeners => {
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
            })(subscribeCallback)(this.equality)
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
            memoizeCallback => (originalMemoize => equality => getState => {
                const resolvedMemoize = originalMemoize(getState);
                return {
                    ...resolvedMemoize,
                    memoize: callback => {
                        let state = undefined,
                            result = undefined;
                        return (...parameters) => {
                            const next = getState();
                            if (!equality(state, next)) {
                                state = next;
                                result = resolvedMemoize.memoize(callback)(...parameters);
                            }
                            return result;
                        }
                    }
                };
            })(memoizeCallback)(this.equality)
        );
    }
}

export default Composite;
