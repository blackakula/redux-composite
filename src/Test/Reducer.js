import Structure from '../index';
import expect from 'expect';
import deepFreeze from 'deep-freeze';

const toggle = (state, action) => state === undefined ? false : (action.type === 'TOGGLE' ? !state : state);
const increment = (state, action) => state === undefined ? 0 : (action.type === 'INCREMENT' ? state + 1 : state);
const calculator = (state, action) => {
    if (state === undefined) {
        return 0;
    }
    switch (action.type) {
        case 'INCREMENT':
            return state + action.value;
        case 'DECREMENT':
            return state - action.value;
        default:
            return state;
    }
};

const checkBoth = reducer => (expected, state, action) => {
    if (state !== undefined) {
        deepFreeze(state);
    }
    expect(reducer(state, action)).toEqual(expected);
    if (typeof action === 'object') {
        expect(reducer(state, {type: 'COMPOSITE', composite: action})).toEqual(expected);
    }
};

const test = () => {
    const composite = Structure({toggle, calc: [increment, calculator]});
    let checker = checkBoth(composite.reducer);
    // Init state
    checker({toggle: false, calc: [0, 0]});
    // Run all at the same time
    checker(
        {toggle: false, calc: [2, 0]},
        {toggle: true, calc: [1, 2]},
        {
            toggle: {type: 'TOGGLE'},
            calc: [{type: 'INCREMENT'}, {type: 'DECREMENT', value: 2}]
        }
    );
    // Run only one
    checker(
        {toggle: false, calc: [2, 2]},
        {toggle: false, calc: [1, 2]},
        {
            toggle: {type: 'unknown'},
            calc: [{type: 'INCREMENT'}]
        }
    );

    const complex = Structure({increment, reducer: composite});
    checker = checkBoth(complex.reducer);
    // Init state
    checker({increment: 0, reducer: {toggle: false, calc: [0, 0]}});
    // Run all at the same time
    checker(
        {increment: 3, reducer: {toggle: false, calc: [2, 0]}},
        {increment: 2, reducer: {toggle: true, calc: [1, 2]}},
        {
            increment: {type: 'INCREMENT'},
            reducer: {
                toggle: {type: 'TOGGLE'},
                calc: [{type: 'INCREMENT'}, {type: 'DECREMENT', value: 2}]
            }
        }
    );
    // Run only one
    checker(
        {increment: 1, reducer: {toggle: false, calc: [2, 2]}},
        {increment: 1, reducer: {toggle: false, calc: [1, 2]}},
        {
            increment: undefined,
            reducer: {
                toggle: {type: 'unknown'},
                calc: [{type: 'INCREMENT'}]
            }
        }
    );
};
export {toggle, increment, calculator};
export default test;
