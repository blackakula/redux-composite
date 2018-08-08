import {Structure} from 'redux-composite';

const toggle = (state, action) => state === undefined ? false : (action.type === 'TOGGLE' ? !state : state);
const inc = (state, action) => state === undefined ? 0 : (action.type === 'INCREMENT' ? state + 1 : state);
let highLevelState = {toggle: false, inc: [1, 2]};

const composite1 = Structure({
    toggle,
    inc: [inc, inc]
});

let listeners = [];

const highLevelDispatch1 = (reducer => action => {
    const newState = reducer(highLevelState, action);
    if (newState !== highLevelState) {
        highLevelState = newState;
        listeners.map(listener => listener());
    }
})(composite1.reducer);

const createStore1 = () => ({
    getState: () => highLevelState,
    dispatch: highLevelDispatch1,
    subscribe: listener => {
        listeners.push(listener);
        return () => listeners = listeners.filter(l => l !== listener);
    }
});

composite1.createStore({createStore: createStore1})();
composite1.store.toggle.subscribe(({getState}) => {
    if (getState()) {
        composite1.store.inc[1].dispatch({type: 'INCREMENT'});
    }
});
composite1.subscribe({
    toggle: ({getState, dispatch}) => {
        if (getState()) {
            dispatch({type: 'TOGGLE'});
        }
    }
});
composite1.store.toggle.dispatch({type: 'TOGGLE'});
// highLevelState is {toggle: false, inc: [1, 3]}

highLevelState = {toggle: false, inc: [1, 2]};
const composite2 = Structure({
    toggle,
    inc: Structure([inc, inc])
});

listeners = [];
const highLevelDispatch2 = (reducer => action => {
    const newState = reducer(highLevelState, action);
    if (newState !== highLevelState) {
        highLevelState = newState;
        listeners.map(listener => listener());
    }
})(composite2.reducer);

const createStore2 = () => ({
    getState: () => highLevelState,
    dispatch: highLevelDispatch2,
    subscribe: listener => {
        listeners.push(listener);
        return () => listeners = listeners.filter(l => l !== listener);
    }
});
composite2.createStore({createStore: createStore2})();

const unsubscribe = composite2.store.inc.store.subscribe(() => composite2.store.toggle.dispatch({type: 'TOGGLE'}));
composite2.store.inc.structure[1].dispatch({type: 'INCREMENT'});
// highLevelState is {toggle: true, inc: [1, 3]}
unsubscribe();
composite2.store.inc.structure[1].dispatch({type: 'INCREMENT'});
// highLevelState is {toggle: true, inc: [1, 4]}
