import {Structure} from 'redux-composite';

const counter = () => {
    let counter = 0;
    return () => counter++;
}

const toggle = (state, action) => state === undefined ? false : (action.type === 'TOGGLE' ? !state : state);
const inc = (state, action) => state === undefined ? 0 : (action.type === 'INCREMENT' ? state + 1 : state);

let highLevelState = {toggle: false, inc: [1, 2]};

const composite1 = Structure({
    toggle,
    inc: [inc, inc]
});

const highLevelDispatch1 = (reducer => action => {
    return highLevelState = reducer(highLevelState, action);
})(composite1.reducer);

const createStore1 = () => ({
    dispatch: highLevelDispatch1,
    getState: () => highLevelState
})

composite1.createStore({createStore: createStore1})();

const memoized1 = composite1.memoize({
    memoize: counter(),
    structure: {
        toggle: counter(),
        inc: [counter(), counter()]
    }
});

memoized1.memoize();
memoized1.structure.toggle();
memoized1.structure.inc[0]();
memoized1.structure.inc[1]();
memoized1.memoize();
memoized1.structure.toggle();
memoized1.structure.inc[0]();
memoized1.structure.inc[1]();

composite1.dispatch({type: 'COMPOSITE', composite: {
    toggle: {type: 'TOGGLE'},
    inc: [, {type: 'INCREMENT'}]
}});

memoized1.memoize();
memoized1.structure.toggle();
memoized1.structure.inc[0]();
memoized1.structure.inc[1]();

highLevelState = {toggle: false, inc: [1, 2]};
const composite2 = Structure({
    toggle,
    inc: Structure([inc, inc])
});
const highLevelDispatch2 = (reducer => action => {
    return highLevelState = reducer(highLevelState, action);
})(composite2.reducer);

const createStore2 = () => ({
    dispatch: highLevelDispatch2,
    getState: () => highLevelState
});

composite2.createStore({createStore: createStore2})();
const memoized2 = composite2.memoize({
    memoize: ({getState}) => getState().toggle ? getState().inc[1] : getState().inc[0],
    structure: {
        toggle: counter(),
        inc: {
            memoize: ({structure}) => structure[0]() + structure[1](),
            structure: [counter(), counter()]
        }
    }
});

memoized2.memoize();
memoized2.structure.toggle();
memoized2.structure.inc.structure[0]();
memoized2.structure.inc.structure[1]();
memoized2.structure.inc.memoize();

memoized2.memoize();
memoized2.structure.toggle();
memoized2.structure.inc.structure[0]();
memoized2.structure.inc.structure[1]();
memoized2.structure.inc.memoize();

composite2.dispatch({type: 'COMPOSITE', composite: {
    toggle: {type: 'TOGGLE'},
    inc: [, {type: 'INCREMENT'}]
}});

memoized2.memoize();
memoized2.structure.toggle();
memoized2.structure.inc.structure[0]();
memoized2.structure.inc.structure[1]();
memoized2.structure.inc.memoize();
