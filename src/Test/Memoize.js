import {Structure} from '../index';
import expect from 'expect';
import {toggle, increment, calculator} from './Reducer';
import {createStore, applyMiddleware} from 'redux';
import MemoizeChain from '../MemoizeChain';

const someFunction = (a, b) => a + b;

const test1 = (memoize, dispatch) => {
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
    dispatch({type: 'COMPOSITE', composite: {
            calc: [{type: 'INCREMENT'}]
        }});
    // re-newed
    expect(memoizeFunctionsStructure.calc[0](9, 10)).toEqual(19);
    // re-newed
    expect(memoizeFunction(10, 11)).toEqual(21);
    // not updated!
    expect(memoizeFunctionsStructure.toggle(11, 12)).toEqual(11);

    // change state
    dispatch({type: 'COMPOSITE', composite: {
            toggle: {type: 'TOGGLE'}
        }});
    // re-newed
    expect(memoizeFunctionsStructure.toggle(12, 13)).toEqual(25);
    // re-newed
    expect(memoizeFunction(13, 14)).toEqual(27);
    // not updated!
    expect(memoizeFunctionsStructure.calc[0](14, 15)).toEqual(19);
}

const test2 = (memoize, dispatch) => {
    // custom memoize
    const custom = MemoizeChain(
        memoize.structure.toggle.memoize,
        memoize.structure.calc[0].memoize
    )(someFunction);

    expect(custom(15, 16)).toEqual(31);
    dispatch({type: 'COMPOSITE', composite: {
            toggle: {type: 'TOGGLE'}
        }});
    expect(custom(16, 17)).toEqual(33);
    dispatch({type: 'COMPOSITE', composite: {
            calc: [undefined, {type: 'INCREMENT', value: 2}]
        }});
    // not changed: calc[1] is not part of memoize functions chain
    expect(custom(17, 18)).toEqual(33);
    dispatch({type: 'COMPOSITE', composite: {
            calc: [{type: 'INCREMENT'}, {type: 'INCREMENT', value: 2}]
        }});
    // this time updated: calc[0] is part of memoize functions chain
    expect(custom(18, 19)).toEqual(37);
}

const test3 = createComposite => {
    const composite = createComposite();
    let store = createStore(
        composite.reducer,
        {toggle: false, calc: [0, 1]},
        applyMiddleware(composite.middleware)
    );
    let calculated = {total: 0, structure: {toggle: 0, calc: [0, 0]}};

    const structureSimple = {
        memoize: ({structure}) => {
            calculated.total += 1;
            const {toggle, calc} = structure;
            return toggle() ? calc[0]() : calc[1]()
        },
        structure: {
            toggle: ({getState}) => {
                calculated.structure.toggle += 1;
                return getState();
            },
            calc: [
                ({getState}) => {
                    calculated.structure.calc[0] += 1;
                    return getState() - 1;
                },
                ({getState}) => {
                    calculated.structure.calc[1] += 1;
                    return getState() + 1;
                }
            ]
        }
    };

    composite.init(store);
    const memoizeSimple = composite.memoize;
    const memoized1 = memoizeSimple(structureSimple)
    const finalMemoize1 = memoized1.memoize;

    // Expected behavior
    expect(finalMemoize1()).toEqual(2);
    expect(calculated).toEqual({total: 1, structure: {toggle: 1, calc: [0, 1]}});
    expect(finalMemoize1()).toEqual(2);
    expect(calculated).toEqual({total: 1, structure: {toggle: 1, calc: [0, 1]}});
    store.dispatch({type: 'COMPOSITE', composite: {toggle: {type: 'TOGGLE'}}});
    expect(finalMemoize1()).toEqual(-1);
    expect(calculated).toEqual({total: 2, structure: {toggle: 2, calc: [1, 1]}});
    expect(finalMemoize1()).toEqual(-1);
    expect(calculated).toEqual({total: 2, structure: {toggle: 2, calc: [1, 1]}});
    store.dispatch({type: 'COMPOSITE', composite: {calc: [{type: 'INCREMENT'}]}});
    expect(finalMemoize1()).toEqual(0);
    expect(calculated).toEqual({total: 3, structure: {toggle: 2, calc: [2, 1]}});
    store.dispatch({type: 'COMPOSITE', composite: {toggle: {type: 'TOGGLE'}, calc: [undefined, {type: 'DECREMENT', value: -5}]}});
    expect(finalMemoize1()).toEqual(7);
    expect(calculated).toEqual({total: 4, structure: {toggle: 3, calc: [2, 2]}});
    store.dispatch({type: 'COMPOSITE', composite: {toggle: {type: 'TOGGLE'}, calc: [undefined, {type: 'DECREMENT', value: -5}]}});
    expect(finalMemoize1()).toEqual(0);
    expect(calculated).toEqual({total: 5, structure: {toggle: 4, calc: [2, 2]}});

    const memoized2 = memoizeSimple({
        structure: {
            toggle: structureSimple.structure.toggle,
            calc: [structureSimple.structure.calc[0]]
        }
    }).structure;
    expect(memoized2.toggle()).toEqual(true);
    expect(memoized2.calc[0]()).toEqual(0);
    expect(calculated).toEqual({total: 5, structure: {toggle: 5, calc: [3, 2]}});
    store.dispatch({type: 'COMPOSITE', composite: {toggle: {type: 'TOGGLE'}}});
    expect(memoized2.toggle()).toEqual(false);
    expect(memoized2.calc[0]()).toEqual(0);
    expect(calculated).toEqual({total: 5, structure: {toggle: 6, calc: [3, 2]}});

    const complexComposite = Structure({
        increment,
        reducer: createComposite()
    })
    let complexStore = createStore(
        complexComposite.reducer,
        {increment: 1, reducer: {toggle: false, calc: [0, 1]}},
        applyMiddleware(complexComposite.middleware)
    );

    let complexCalculated = {total: 0, increment: 0}
    // reset
    calculated = {total: 0, structure: {toggle: 0, calc: [0, 0]}}
    complexComposite.init(complexStore)
    const complexMemoized = complexComposite.memoize({
        memoize: ({structure}) => {
            complexCalculated.total += 1;
            const {increment, reducer} = structure;
            return increment() * reducer.memoize()
        },
        structure: {
            increment: ({getState}) => {
                complexCalculated.increment += 1
                return getState()
            },
            reducer: structureSimple
        }
    })
    const finalComplexMemoize = complexMemoized.memoize;
    expect(finalComplexMemoize()).toEqual(2);
    expect(calculated).toEqual({total: 1, structure: {toggle: 1, calc: [0, 1]}});
    expect(complexCalculated).toEqual({total: 1, increment: 1});
    expect(complexMemoized.structure.reducer.structure.calc[0]()).toEqual(-1);
    expect(calculated).toEqual({total: 1, structure: {toggle: 1, calc: [1, 1]}});
    complexStore.dispatch({type: 'COMPOSITE', composite: {increment: {type: 'INCREMENT'}, reducer: {toggle: {type: 'TOGGLE'}}}});
    expect(finalComplexMemoize()).toEqual(-2);
    expect(calculated).toEqual({total: 2, structure: {toggle: 2, calc: [1, 1]}});
    expect(complexCalculated).toEqual({total: 2, increment: 2});
}

const test = () => {
    const createComposite = () => Structure({
        toggle,
        calc: [
            increment,
            calculator
        ]
    })
    const composite = createComposite();
    let store = createStore(
        composite.reducer,
        {toggle: false, calc: [0, 1]},
        applyMiddleware(composite.middleware)
    );

    expect(someFunction(2, 3)).toEqual(5);
    const memoize = composite.memoize(store.getState);

    test1(memoize, store.dispatch);

    test2(memoize, store.dispatch);

    test3(createComposite);
};

export default test;
