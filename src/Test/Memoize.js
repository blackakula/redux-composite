import {Structure, Composite} from '../index';
import expect from 'expect';
import {toggle, increment, calculator} from './Reducer';
import {createStore, applyMiddleware} from 'redux';

const test = () => {
    const composite = Structure({
        toggle,
        calc: [
            increment,
            calculator
        ]
    });
    let store = createStore(
        composite.reducer,
        {toggle: false, calc: [0, 1]},
        applyMiddleware(composite.middleware)
    );

    const someFunction = (a, b) => a + b;
    expect(someFunction(2, 3)).toEqual(5);
    const memoize = composite.memoize(store.getState);
    const memoizeFunction = memoize.memoize(someFunction);
    const memoizeFunctionsStructure = {
        toggle: memoize.structure.toggle.memoize(someFunction),
        calc: [
            memoize.structure.calc[0].memoize(someFunction)
        ]
    };
    expect(memoizeFunction(3, 4)).toEqual(7);
    // memoized
    expect(memoizeFunction(4, 5)).toEqual(7);
    expect(memoizeFunctionsStructure.toggle(5, 6)).toEqual(11);
    // memoized
    expect(memoizeFunctionsStructure.toggle(6, 7)).toEqual(11);
    expect(memoizeFunctionsStructure.calc[0](7, 8)).toEqual(15);
    // memoized
    expect(memoizeFunctionsStructure.calc[0](8, 9)).toEqual(15);

    // change state
    store.dispatch({type: 'COMPOSITE', composite: {
        calc: [{type: 'INCREMENT'}]
    }});
    // re-newed
    expect(memoizeFunctionsStructure.calc[0](9, 10)).toEqual(19);
    // re-newed
    expect(memoizeFunction(10, 11)).toEqual(21);
    // not updated!
    expect(memoizeFunctionsStructure.toggle(11, 12)).toEqual(11);
};

export default test;
