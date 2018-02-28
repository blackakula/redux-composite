import {Structure, Redux} from 'redux-composite';

const toggle = (state, action) => state === undefined ? false : (action.type === 'TOGGLE' ? !state : state);
const inc = (state, action) => state === undefined ? 0 : (action.type === 'INCREMENT' ? state + 1 : state);

const composite = Structure({toggle, inc});

let highLevelState = {toggle: false, inc: 1};
const getHighLevelState = () => highLevelState;

let listeners = [];
const highLevelSubscribe = listener => listeners.push(listener);

const highLevelDispatch = action => {
    const newState = composite.reducer(highLevelState, action);
    if (newState !== highLevelState) {
        highLevelState = newState;
        listeners.map(listener => listener());
    }
};
const redux = Redux(composite)({
    getState: getHighLevelState,
    subscribe: highLevelSubscribe,
    dispatch: highLevelDispatch
});

let counter = 0;
redux.toggle.redux.subscribe(({getState, dispatch}) => {
    if (getState()) {
        dispatch({type: 'TOGGLE'});
    }
    counter += 1;
});

composite.subscribe(highLevelDispatch, getHighLevelState, highLevelSubscribe)({
    toggle: ({getState}) => {
        if (!getState()) {
            highLevelDispatch({type: 'COMPOSITE', composite: {inc: {type: 'INCREMENT'}}})
        }
    },
    inc: ({getState}) => {
        if (getState() % 2 === 0) {
            highLevelDispatch({type: 'COMPOSITE', composite: {toggle: {type: 'TOGGLE'}}});
        }
    }
});
redux.toggle.redux.dispatch({type: 'TOGGLE'}); // counter is 2
redux.inc.redux.dispatch({type: 'INCREMENT'}); // counter is 4
highLevelDispatch({type: 'COMPOSITE', composite: {
    toggle: {type: 'TOGGLE'},
    inc: {type: 'INCREMENT'}
}}); // counter is 6
