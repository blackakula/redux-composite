# Redux Composite

Composing high-level [Labelled transition system](https://en.wikipedia.org/wiki/Transition_system) from small ones.

### Table of contents
1. [Transitions (Reducers)](README.md#transitions-reducers)
2. [State](README.md#state)
3. [Dispatch](README.md#dispatch)
4. [Subscribe listeners](README.md#subscribe-listeners)
5. [Middleware](README.md#middleware)
6. [Memoize](README.md#memoize)
7. [Injections](README.md#injections)

## Transitions (Reducers)

In next example you have 2 low-level transitions defined:
1. **toggle**: switch state to the opposite (type: Boolean)
2. **inc**: increment state with 1 (type: Integer)

```javascript
const toggle = (state, action) => state === undefined ? false : (action.type === 'TOGGLE' ? !state : state);
const inc = (state, action) => state === undefined ? 0 : (action.type === 'INCREMENT' ? state + 1 : state);

toggle(true, {type: 'TOGGLE'}); // false
inc(2, {type: 'INCREMENT'}); // 3
```

And you want to have composite state with these 2 sub-states, with all the possible compositions of original transitions.
Just simply do this:

```javascript
import {Structure} from 'redux-composite';

const composite1 = Structure({toggle, inc}).reducer;
composite1({toggle: true, inc: 2}, {
    type: 'COMPOSITE',
    composite: {
        toggle: {type: 'TOGGLE'},
        inc: {type: 'INCREMENT'}
    }
}); // {toggle: false, inc: 3}
```

:exclamation: Why not using [Redux combineReducers](https://redux.js.org/api-reference/combinereducers)?

Next example is not possible to achive with combineReducers without having collisions:

```javascript
const composite2 = Structure({inc1: inc, inc2: inc}).reducer;
composite2({inc1: 1, inc2: 1}, {
    type: 'COMPOSITE',
    composite: {inc2: {type: 'INCREMENT'}}
}); // {inc1: 1, inc2: 2}
```

More complicated state composition? You can compose as much as you want:

```javascript
const composite3 = Structure({
    toggle,
    child: Structure([inc, inc])
}).reducer;

composite3(
    {toggle: true, child: [1, 2]},
    {
        type: 'COMPOSITE',
        composite: {
            toggle: {type: 'TOGGLE'},
            child: [undefined, {type: 'INCREMENT'}]
        }
    }
); // {toggle: false, child: [1, 3]}
```

See the [complete reducers.js code](examples/reducers.js) in examples folder.

## State

A transition system actually defines transitions between states. State itself is static - nothing to do with transitions itself.
Most likely, you'll need to know the current state in the low-level system. But we do not expect the whole high-level state.
For `toggle` example we expect `getState()` will return us Boolean type. But the high-level system provides only high-level state.

The solution is next:

```javascript
import {Structure, Redux} from 'redux-composite';

let highLevelState = {toggle: false, inc: [1, 2]};
const getHighLevelState = () => highLevelState;
const dummyReducer = () => {};

const composite1 = Structure({
    toggle: dummyReducer,
    inc: [dummyReducer, dummyReducer]
});
const redux1 = Redux(composite1)({getState: getHighLevelState});

redux1.toggle.redux.getState(); // false
redux1.inc[0].redux.getState(); // 1
redux1.inc[1].redux.getState(); // 2
```

So, now you are able to inject consistent `getState()` methods in low-level system.

When you have nested composites, you can have the `getState()` for each composite:

```javascript
const composite2 = Structure({
    toggle: dummyReducer,
    inc: Structure([dummyReducer, dummyReducer])
});
const redux2 = Redux(composite2)({getState: getHighLevelState});

redux2.toggle.redux.getState(); // false
redux2.inc.redux.getState(); // [1, 2]
redux2.inc.structure[0].redux.getState(); // 1
redux2.inc.structure[1].redux.getState(); // 2
highLevelState.inc[0] = 3;
redux2.inc.structure[0].redux.getState(); // 3
```

:exclamation: Even though the library uses same naming as [Redux](https://redux.js.org/), it has no dependency on Redux (except unit tests).
Same naming conventions just allows out-of-the-box compatibility with Redux as a high-level state management system.

See the [complete state.js code](examples/state.js) in examples folder.

## Dispatch

Are you immutable? Than probably you don't use ~~`setState()`~~ in your code.
Having single global state of application in a labelled transition system, most likely we also have `dispatch()` method to make transitions of the global state.
Low-level system doesn't know labels ("actions") and structure of the global state. How to inject the consistent `dispatch()` method to the low-level system?
Assuming high-level reducer is implemented as a composite, than the high-level `dispatch()` method should use composite reducer, like in next example:

```javascript
let highLevelState1 = {toggle: false, child: [1, 2]};
const composite1 = Structure({
    toggle,
    child: [inc, inc]
});
const highLevelDispatch1 = action => {
    return highLevelState1 = composite1.reducer(highLevelState1, action);
};
const redux1 = Redux(composite1)({dispatch: highLevelDispatch1});

redux1.toggle.redux.dispatch({type: 'TOGGLE'}); // highLevelState1 is {toggle: true, child: [1, 2]}
redux1.child[1].redux.dispatch({type: 'INCREMENT'}); // highLevelState1 is {toggle: true, child: [1, 3]}
```

When you have nested composites, you're able to `dispatch()` for each composite:

```javascript
let highLevelState2 = {toggle: false, child: [1, 2]};
const composite2 = Structure({
    toggle,
    child: Structure([inc, inc])
});
const highLevelDispatch2 = action => {
    return highLevelState2 = composite2.reducer(highLevelState2, action);
};
const redux2 = Redux(composite2)({dispatch: highLevelDispatch2});

redux2.child.redux.dispatch({
    type: 'COMPOSITE',
    composite: [{type: 'INCREMENT'}, {type: 'INCREMENT'}]
}); // highLevelState2 is {toggle: false, child: [2, 3]}

redux2.child.structure[0].redux.dispatch({type: 'INCREMENT'}); // highLevelState2 is {toggle: false, child: [3, 3]}
```

See the [complete dispatch.js code](examples/dispatch.js) in examples folder.

## Subscribe listeners

When the state is changed you may want to execute some callbacks. By default, every global state change trigger all subscribed listeners.
But if we want to subscribe on low-level state changes, we want to track only these low-level state changes.
Therefore `subscribe()` implementation hardly depends on `getState()` and the equality check between two states.
> By default, equality check is just `(prev, next) => prev === next`, but it's possible to inject your own (see in section [Injections](README.md#injections)).

Let's assume you have high-level composite:

```javascript
const composite = Structure({toggle, inc});
```

Let's define high-level `subscribe()`, `getState()` and `dispatch()` next way:

```javascript
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
```

There are 2 different ways to subscribe for the low-level state changes - and they are totally equivalent.
First way is consistent with the low-level system, therefore could be injected into low-level system as a callback:

```javascript
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
```

Second way is not consistent with low-level system and may be used to communicate low-level systems together.
And this way you can subscribe listeners on several low-level state changes at the same time:

```javascript
composite.subscribe(highLevelDispatch, getHighLevelState, highLevelSubscribe)({
    toggle: ({getState, dispatch}) => {
        if (!getState()) {
            highLevelDispatch({type: 'COMPOSITE', composite: {inc: {type: 'INCREMENT'}}})
        }
    },
    inc: ({getState, dispatch}) => {
        if (getState() % 2 === 0) {
            highLevelDispatch({type: 'COMPOSITE', composite: {toggle: {type: 'TOGGLE'}}});
        }
    }
});
```

If the high-level `subscribe()` method returns unsubscribe callback, than the low-level subscriptions do the same.

See the [complete subscribe.js code](examples/subscribe.js) in examples folder.

## Middleware

## Memoize

## Injections
