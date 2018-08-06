import {Structure, Composite} from 'redux-composite';

const toggle = (state, action) => state === undefined ? false : (action.type === 'TOGGLE' ? !state : state);
const inc = (state, action) => state === undefined ? 0 : (action.type === 'INCREMENT' ? state + 1 : state);

const toggleMiddleware = ({dispatch, getState}) => next => action => {
    if (!getState() && action.type !== 'TOGGLE') {
        return next({type: 'TOGGLE'});
    }
    return next(action);
};
const incMiddleware = ({dispatch, getState}) => next => action => {
    const result = next(action);
    if (getState() % 2 === 0) {
        return dispatch({type: 'INCREMENT'});
    }
    return result;
};

const composite = Structure({
    toggle: Composite({reducer: toggle, middleware: toggleMiddleware}),
    inc: Composite({reducer: inc, middleware: incMiddleware})
});

let highLevelState = {toggle: false, inc: 1};
const getHighLevelState = () => highLevelState;
const highLevelDispatch = action => {
    return highLevelState = composite.reducer(highLevelState, action);
};

composite.middleware({dispatch: highLevelDispatch, getState: getHighLevelState})(highLevelDispatch)({
    type: 'COMPOSITE',
    composite: {
        toggle: {type: 'SOMETHING_ELSE'},
        inc: {type: 'INCREMENT'}
    }
}); // highLevelState is {toggle: true, inc: 3}
composite.middleware({dispatch: highLevelDispatch, getState: getHighLevelState})(highLevelDispatch)({
    type: 'COMPOSITE',
    composite: {
        toggle: {type: 'TOGGLE'},
        inc: {type: 'SOMETHING_ELSE'}
    }
}); // highLevelState is {toggle: false, inc: 3}
