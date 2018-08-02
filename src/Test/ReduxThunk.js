import {createStore, applyMiddleware} from 'redux';
import {toggle, increment, calculator} from './Reducer';
import {Structure, Composite} from '../index';
import thunk from 'redux-thunk';
import expect from 'expect';

const calculatorThunkActor = () => (dispatch, getState) => {
    if (getState() % 2 === 0) {
        dispatch({type: 'DECREMENT', value: 1});
    }
};

const createComposite = () => Structure({
    toggle,
    calc: [
        increment,
        Composite({reducer: calculator, middleware: thunk})
    ]
});

const test = () => {
    const composite = createComposite()
    let store = composite.createStore()(r => r, {toggle: false, calc: [1, 2]});
    store.dispatch({type: 'COMPOSITE', composite: {calc: [ , calculatorThunkActor()]}});
    expect(store.getState()).toEqual({toggle: false, calc: [1, 1]});
    composite.dispatch({type: 'COMPOSITE', composite: {calc: [ , calculatorThunkActor()]}});
    expect(composite.getState()).toEqual({toggle: false, calc: [1, 1]});

    const complex = Structure({
        increment,
        reducer: createComposite()
    });
    let complexStore = complex.createStore()(r => r, {increment: 1, reducer: {toggle: false, calc: [1, 2]}})
    complexStore.dispatch({
        type: 'COMPOSITE',
        composite: {
            increment: {type: 'INCREMENT'},
            reducer: {
                toggle: {type: 'TOGGLE'},
                calc: [
                    {type: 'INCREMENT'},
                    calculatorThunkActor()
                ]
            }
        }
    });
    expect(complex.getState()).toEqual({
        increment: 2,
        reducer: {
            toggle: true,
            calc: [2, 1]
        }
    });
};
export default test;
