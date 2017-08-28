import WalkComposite from './Helper/WalkComposite';
import Reducer from './Composite/Reducer';
import Middleware from './Composite/Middleware';
import Equality from './Composite/Equality';
import Subscribe from './Composite/Subscribe';

class Composite
{
    constructor(data) {
        const {structure, reducer, middleware, equality, subscribe, custom} = data;
        let thisMiddleware = undefined,
            thisSubscribe = undefined;
        if (structure === undefined) {
            if (typeof reducer !== 'function') {
                throw {
                    message: "Not valid parameters: should be either structure or reducer"
                }
            }
            this.reducer = reducer;
            thisMiddleware = typeof middleware === 'function'
                ? middleware
                : () => next => action => next(action);
            this.equality = this.equality = typeof equality === 'function'
                ? equality
                : (prev, next) => prev === next;
            thisSubscribe = typeof subscribe === 'function'
                ? subscribe
                : (dispatch, getState) => listener => () => listener({dispatch, getState});
        } else {
            const compositeStructure = WalkComposite({}, true)(
                leaf => typeof leaf === 'function'
                    ? new Composite({reducer: leaf})
                    : leaf
            )(structure);
            this.reducer = custom === undefined || typeof custom.reducer !== 'function'
                ? Reducer(compositeStructure)
                : custom.reducer(compositeStructure);
            thisMiddleware = custom === undefined || typeof custom.middleware !== 'function'
                ? Middleware(compositeStructure)
                : custom.middleware(compositeStructure);
            this.equality = custom === undefined || typeof custom.equality !== 'function'
                ? Equality(compositeStructure)
                : custom.equality(compositeStructure);
            thisSubscribe = custom === undefined || typeof custom.subscribe !== 'function'
                ? Subscribe(compositeStructure)
                : custom.subscribe(compositeStructure);
        }

        // Middleware wrapper
        this.middleware = ({dispatch, getState}) => next => action => {
            return action === undefined
                ? next(action)
                : thisMiddleware({dispatch, getState})(next)(action);
        };

        // Subscribe wrapper
        const thisEquality = this.equality;
        this.subscribe = (dispatch, getState, subscribe = undefined) => listeners => {
            if (listeners === undefined) {
                return () => {};
            }
            const initializedSubscribe = thisSubscribe(dispatch, getState)(listeners);
            let state = getState();
            const listener = () => {
                const next = getState();
                if (!thisEquality(state, next)) {
                    initializedSubscribe();
                }
                state = next;
            };
            return typeof subscribe === 'function' ? subscribe(listener) : listener;
        };
    }
}

export default Composite;
