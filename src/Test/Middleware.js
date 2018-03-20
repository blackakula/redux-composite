import {Structure, Composite} from '../index';
import expect from 'expect';
import {createStore, applyMiddleware} from 'redux';
import {toggle, increment, calculator} from './Reducer';

const middlewareCalcCallback = ({dispatch, getState}) => next => action => {
    expect(['INCREMENT', 'DECREMENT']).toContain(action.type);
    let result = next(action);
    if (action.type === 'INCREMENT') {
        let state = getState();
        result = dispatch({type: 'DECREMENT', value: 5});
        expect(getState()).toEqual(state - 5);
    }
    return result;
};
const middlewareIncrementCallback = ({dispatch, getState}) => next => action => {
    const previousState = getState();
    const result = next(action);
    if (previousState % 2 === 0 || getState() === previousState) {
        return result;
    }

    setTimeout(() => {
        const previousState = getState();
        dispatch({type: 'INCREMENT'});
        expect(getState()).toEqual(previousState + 1);
    }, 0);
    return result;
};
const anotherMiddlewareIncrementCallback = ({dispatch, getState}) => next => action => {
    let result = next(action);
    if (getState() % 4 === 1) {
        result = [...(new Array(3))].map(() => dispatch({type: 'INCREMENT'}))[2];
    }
    return result;
};

const test = () => {
    const composite = Structure({toggle, calc: [
        Composite({reducer: increment, middleware: middlewareIncrementCallback}),
        Composite({reducer: calculator, middleware: middlewareCalcCallback})
    ]});
    let store = createStore(
        composite.reducer,
        {toggle: false, calc: [1, 2]},
        applyMiddleware(composite.middleware)
    );

    store.dispatch({type: 'COMPOSITE', composite: {calc:[undefined, {type: 'INCREMENT', value: 2}]}});
    // added 2, decreased by 5
    expect(store.getState()).toEqual({toggle: false, calc: [1, -1]});

    store.dispatch({type: 'COMPOSITE', composite: {calc:[{type: 'INCREMENT'}]}});
    expect(store.getState()).toEqual({toggle: false, calc: [2, -1]});
    store.dispatch({type: 'COMPOSITE', composite: {calc:[{type: 'INCREMENT'}]}});
    const FIXED_STATE = {toggle: false, calc: [3, -1]};
    expect(store.getState()).toEqual(FIXED_STATE);
    // after timeout increment will be changed to 4

    const complex = Structure({
        increment: Composite({reducer: increment, middleware: middlewareIncrementCallback}),
        reducer: composite
    });
    let complexStore = createStore(
        complex.reducer,
        {increment: 1, reducer: store.getState()},
        applyMiddleware(complex.middleware)
    );
    expect(complexStore.getState().reducer).toEqual(FIXED_STATE);
    // dispatch multiple actions on children !
    complexStore.dispatch({
        type: 'COMPOSITE',
        composite: {
            increment: {type: 'INCREMENT'},
            reducer: {
                toggle: {type: 'TOGGLE'},
                calc: [
                    {type: 'INCREMENT'},
                    {type: 'INCREMENT', value: 10}
                ]
            }
        }
    });
    expect(complexStore.getState()).toEqual({
        increment: 2,
        reducer: {
            toggle: true,
            calc: [4, 4]
        }
    });
    // but value in store stays 3 !
    expect(store.getState()).toEqual(FIXED_STATE);

    const anotherComplex = Structure({
        increment: Composite({reducer: increment, middleware: anotherMiddlewareIncrementCallback}),
        reducer: Structure({
            toggle,
            calc: [
                Composite({reducer: increment, middleware: anotherMiddlewareIncrementCallback}),
                calculator
            ]
        })
    });
    let anotherComplexStore = createStore(
        anotherComplex.reducer,
        {increment: 1, reducer: {toggle: false, calc: [0, 1]}},
        applyMiddleware(anotherComplex.middleware)
    );
    anotherComplexStore.dispatch({type: 'COMPOSITE', composite: {
        increment: {type: 'INCREMENT'},
        reducer: {
            toggle: {type: 'TOGGLE'},
            calc: [{type: 'INCREMENT'}, {type: 'INCREMENT', value: 4}]
        }
    }});
    expect(anotherComplexStore.getState()).toEqual({
        increment: 2,
        reducer: {
            toggle: true,
            calc: [4, 5]
        }
    });

    // test several middlewares
    let states = [1, 1];
    const middlewareMultiply2 = i => () => next => action => {
        states[i] *= 2;
        return next(action);
    };
    const middlewareAdd3 = i => () => next => action => {
        states[i] += 3;
        return next(action);
    };

    const testStructure = Structure([
        Composite({
            reducer: toggle,
            middleware: [middlewareMultiply2(0), middlewareAdd3(0)]
        }),
        Composite({
            reducer: toggle,
            middleware: [middlewareAdd3(1), middlewareMultiply2(1)]
        })
    ]);
    let testStore = createStore(testStructure.reducer, applyMiddleware(testStructure.middleware));
    testStore.dispatch({type: 'COMPOSITE', composite: [{type: 'TOGGLE'}, {type: 'TOGGLE'}]});
    expect(states).toEqual([5, 8]);
    testStore.dispatch({type: 'COMPOSITE', composite: [{type: 'TOGGLE'}]});
    expect(states).toEqual([13, 8]);
};
export default test;
