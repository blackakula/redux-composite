import {Composite, Structure} from '../index';
import {calculator, increment, toggle} from './Reducer';
import {createStore, applyMiddleware} from 'redux';
import expect from 'expect';

const incrementMiddleware = ({dispatch, getState}) => next => action => {
    let result = next(action);
    if (getState() % 4 === 1) {
        result = dispatch({type: 'INCREMENT'});
    }
    return result;
};

const test = () => {
    const composite = Structure({
        toggle,
        calc: [
            Composite({reducer: increment, middleware: incrementMiddleware}),
            calculator
        ]
    });
    let store = createStore(
        composite.reducer,
        {toggle: false, calc: [0, 1]},
        applyMiddleware(composite.middleware)
    );
    let calcTriggers = [0, 0];
    let incrementSum = 0;
    composite.subscribe(store.dispatch, store.getState, store.subscribe)({
        calc: [
            ({getState}) => {
                calcTriggers[0] += 1;
                incrementSum += getState();
            },
            () => calcTriggers[1] += 1
        ]
    });
    expect(calcTriggers).toEqual([0, 0]);
    store.dispatch({type: 'COMPOSITE', composite: {
        toggle: {type: 'TOGGLE'}
    }});
    expect(calcTriggers).toEqual([0, 0]); // not triggered
    store.dispatch({type: 'COMPOSITE', composite: {
        calc: [{type: 'INCREMENT'}, {type: 'INCREMENT', value: 3}]
    }});
    expect(calcTriggers).toEqual([2, 1]); // second increment is triggered from middleware
    expect(incrementSum).toEqual(3);

    const complex = Structure({
        increment,
        reducer: composite
    });
    let complexStore = createStore(
        complex.reducer,
        {increment: 2, reducer: {toggle: false, calc: [0, 1]}},
        applyMiddleware(complex.middleware)
    );
    complex.subscribe(complexStore.dispatch, complexStore.getState, complexStore.subscribe)({
        increment: ({getState}) => {
            calcTriggers[0] += 1;
            incrementSum += getState();
        },
        reducer: {calc: [
            undefined,
            () => calcTriggers[1] += 1
        ]}
    });
    complexStore.dispatch({type: 'COMPOSITE', composite: {
        increment: {type: 'INCREMENT'},
        reducer: {
            toggle: {type: 'TOGGLE'},
            calc: [{type: 'INCREMENT'}, {type: 'INCREMENT', value: 3}]
        }
    }});
    expect(complexStore.getState()).toEqual({increment: 3, reducer: {toggle: true, calc: [2, 4]}});
    expect(incrementSum).toEqual(6);
    expect(calcTriggers).toEqual([3, 2]);
};
export default test;
