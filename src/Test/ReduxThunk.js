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

const test = () => {
    const composite = Structure({
        toggle,
        calc: [
            increment,
            Composite({reducer: calculator, middleware: thunk})
        ]
    });
    let store = createStore(
        composite.reducer,
        {toggle: false, calc: [1, 2]},
        applyMiddleware(composite.middleware)
    );
    store.dispatch({type: 'COMPOSITE', composite: {calc: [undefined, calculatorThunkActor()]}});
    expect(store.getState()).toEqual({toggle: false, calc: [1, 1]});
    store.dispatch({type: 'COMPOSITE', composite: {calc: [undefined, calculatorThunkActor()]}});
    expect(store.getState()).toEqual({toggle: false, calc: [1, 1]});

    const complex = Structure({
        increment,
        reducer: composite
    });
    let complexStore = createStore(
        complex.reducer,
        {increment: 1, reducer: {toggle: false, calc: [1, 2]}},
        applyMiddleware(complex.middleware)
    );
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
    expect(complexStore.getState()).toEqual({
        increment: 2,
        reducer: {
            toggle: true,
            calc: [2, 1]
        }
    });
};
export default test;
