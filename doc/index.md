# Redux Composite

## State
- [Documentation](state.md)
- [Example](../examples/state.js)

## Dispatch
- [Documentation](dispatch.md)
- [Example](../examples/dispatch.js)

## Subscribe
- [Documentation](subscribe.md)
- [Example](../examples/subscribe.md)

## Memoize
- [Documentation](memoize.md)
- [Example](../examples/memoize.md)

## Demo
[https://github.com/blackakula/redux-composite-demo/](https://github.com/blackakula/redux-composite-demo/)


# TODO: Draft version below

Composing high-level [Labelled transition system](https://en.wikipedia.org/wiki/Transition_system) from small ones.

:white_check_mark:
The library allows low-level system implementations being independent from the high-level system structure.
This way low-level systems could be re-usable in different high-level systems.

### Table of contents
1. [Transitions (Reducers)](README.md#transitions-reducers)
2. [State](README.md#state)
3. [Dispatch](README.md#dispatch)
4. [Subscribe listeners](README.md#subscribe-listeners)
5. [Middleware](README.md#middleware)
6. [Memoize](README.md#memoize)
7. [Injections](README.md#injections)
   1. [Low-level injections](README.md#low-level-injections)
   2. [Composite injections](README.md#composite-injections)

### Demo
'https://github.com/blackakula/redux-composite-demo/'

The demo shows high-level system, that contains 3 buttons (each one is the same low-level system) and one textarea (as another low-level system) communicating with each other.

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

Second way is not consistent with low-level system and may be used to communicate low-level systems with each other.
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

If the high-level `subscribe()` method returns unsubscribe callback, than the low-level subscriptions and the composite `subscribe()` do the same.

See the [complete subscribe.js code](examples/subscribe.js) in examples folder.

## Middleware

The main idea of middleware is to intercept the transition.
Before the system reach new state we may need to do some "side-effects" in the middle, using current state, transition label ("action") and `dispatch()` function
It can't be done within reducer function, because reducer has no access to `dispatch()`.
Listeners are executed usually after the transition happened, and they don't receive the "action".
The same idea, we need to have high-level system middleware, based on low-level systems middlewares.

Let's assume we have middlewares for our `toggle` and `inc` reducers:

```javascript
const toggleMiddleware = ({dispatch, getState}) => next => action => {
    if (!getState() && action.type !== 'TOGGLE') {
        return next({type: 'TOGGLE'});
    }
    return next(action);
};
const incMiddleware = ({dispatch, getState}) => next => action => {
    const result = next(action);
    if (getState() % 2 === 0) {
        return dispatch({type: 'INCREMENT'});
    }
    return result;
};
```

Now we need to declare, that these middlewares are parts of low-level systems:

```javascript
const composite = Structure({
    toggle: Composite({reducer: toggle, middleware: toggleMiddleware}),
    inc: Composite({reducer: inc, middleware: incMiddleware})
});
```

Here we can see an example of middleware [injection](README.md#injections).
When low-level system has no specific middleware, the default one is provided (which resolves in `next(action)`).
For low-level system the expression `Composite({reducer})` is the same as just `reducer`, because high-level composite resolves low-level reducers to `Composite` objects.
High-level composite object is also `Composite` object, because `Structure(data)` is identical to `Composite({structure: data})`. More details on this in the [Injections](README.md#injections) section.

Let's declare high-level `getState()` and `dispatch()` and make sure, that low-level middlewares are executed through the high-level one:

```javascript
let highLevelState = {toggle: false, inc: 1};
const getHighLevelState = () => highLevelState;
const highLevelDispatch = action => {
    return highLevelState = composite.reducer(highLevelState, action);
};

composite.middleware({dispatch: highLevelDispatch, getState: getHighLevelState})(highLevelDispatch)({
    type: 'COMPOSITE',
    composite: {
        toggle: {type: 'SOMETHING_ELSE'},
        inc: {type: 'INCREMENT'}
    }
}); // highLevelState is {toggle: true, inc: 3}
```

You want to use [Redux Thunk](https://github.com/gaearon/redux-thunk) in your low-level system?
No problem - just [inject thunk](src/Test/ReduxThunk.js) as a middleware for low-level `Composite` object.

#### :white_check_mark: Modularity

This way allows us to provide middleware together with reducer for low-level system.
And keeps low-level system independent from the global state structure and re-usable in different high-level systems.
Your low-level system may provide other injectable entities together with reducer (and middleware) - see [Injections](README.md#injections) section for details.

See the [complete middleware.js code](examples/middleware.js) in examples folder.

## Memoize

This is useful in case, when you know, that result of your function will not change, if the state was not changed.
For this purpose you need to compare previous and next states, therefore `memoize()` implementation hardly depends on `getState()` and the equality check between two states.
Let's assume we have next high-level system:

```javascript
let highLevelState = {toggle: false, inc: 1};
const getHighLevelState = () => highLevelState;

const composite = Structure({
    toggle: toggle,
    inc: inc
});
const highLevelDispatch = action => {
    return highLevelState = composite.reducer(highLevelState, action);
};
```

And we have the heavy function:

```javascript
const experimentalFunction = () => (start => {
    // heavy calculation
    while (new Date().getTime() < start + 1500);
    return start;
})(new Date().getTime());
```

We want to cache result of this function (depends on state).
Let's initialize our memoize (remember, it depends on high-level `getState()`)

```javascript
const memoizeInit = composite.memoize(getHighLevelState);
```

And now we have memoize initialized for all low-level states and for high-level as well:

```javascript
const memoizedComposite = memoizeInit.memoize(experimentalFunction);
const memoizedToggle = memoizeInit.structure.toggle.memoize(experimentalFunction);
```

Calculate initial results of the functions. This time `experimentalFunction()` would be calculated for both:

```javascript
memoizedComposite();
memoizedToggle();
```

Let's dispatch an action, that will not change toggle state and check results of our heavy function:

```javascript
highLevelDispatch({type: 'COMPOSITE', composite: {
    inc: {type: 'INCREMENT'}
}}); // highLevelState is {toggle: false, inc: 2}

memoizedComposite();
memoizedToggle();
```

The function result will be recalculated only for high-level state. For toggle state cached value would be taken.

See the [complete memoize.js code](examples/memoize.js) in examples folder.

## Injections

There are 2 ways to initialize `Composite` object: providing structure of sub-systems or giving "primitives" (at least reducer) for a low-level system.
If neither structure is provided nor reducer (for low-level system), the exception would be thrown.

The list of injectable "terms":
* reducer
* middleware
* equality
* subscribe
* redux
* memoize

The complete injection syntax: `Composite({structure, reducer, middleware, equality, subscribe, redux, memoize})`

> **Note:** By default Redux strictly checks, that the `action` parameter [is plain object](https://github.com/reactjs/redux/blob/master/src/createStore.js#L166) and has `type` property: `action: {type: string}`.
> If you're not using Redux or having custom middleware, dealing with you custom actions (like [Redux Thunk](https://github.com/gaearon/redux-thunk)), the type could be any.
> So, let's say `type Action = action: {type: string} | any`

### Low-level injections

The low-level composite initialization happens, when `structure` parameter is not provided to `Composite` constructor.
For low-level system at least reducer **_is required_**.

#### Reducer

There is no default implementation for reducer.
The reducer should accept `state` and `action` and return new state: `type Reducer = (state: State, action: Action): State`
Keep your reducers immutable! Do not mutate original state - return new object, if state change.
Otherwise, equality check may fail - and other features (memoize, subscribe) may not work.
See [Reducers](README.md#transitions-reducers) section for examples.

#### Middleware

Default: `() => next => action => next(action)`

You can inject any middleware, that follows interface:
```javascript
type Middleware = ({dispatch: (action: Action) => Action, getState: () => State}): ((action: Action) => Action).
```

For examples check [Middleware](README.md#middleware) section.

#### Equality

Default: `(prev, next) => prev === next` - let's call it "default equality"

If you have more complex equality check between previous and next state, inject your own implementation:
`type Equality = (prev: State, next: State): boolean`

#### Subscribe

Default: `Wrappers.Subscribe((dispatch, getState) => listener => () => listener({dispatch, getState}), equality)`

If you want additional custom behavior on all subscribed listeners to you low-level state changes, inject it using this interface:
```javascript
type Subscribe = (dispatch: (action: Action) => Action, getState: () => State): (Function => () => any)
```

`Wrappers.Subscribe` (based on given equality) checks the state changes and execute listener only in case, when state was changed.
So, you may also want to wrap your subscribe injection with `Wrappers.Subscribe`
> If equality is not provided, default equality will be used

#### Redux

Default:
```javascript
(dispatch, getState, subscribe) => ({
    redux: {dispatch, getState, subscribe}
})
```

By default the library provides in `redux` property the same low-level methods, as it was transformed from the high-level ones.
You can implement your own wrappers on transformed methods using the interface:
```javascript
type Redux = (
    dispatch: (action: Action) => Action,
    getState: () => State,
    subscribe: (Function => any)): {redux: {
        dispatch: (action: Action) => Action,
        getState: () => State,
        subscribe: (Function => any)
    }, structure?: mixed}
```

#### Memoize

Default: `Wrappers.Memoize(getState => ({memoize: callback => callback}), equality)`

You're free to implement your own, using the interface:
`memoize(getState: () => State): {memoize: Function => Function}`

`Wrappers.Memoize` (based on given equality) checks the stage changes and caches result of the callback.
So, you may also want to wrap your memoize injection with `Wrappers.Memoize`
> If equality is not provided, default equality will be used

### Composite injections

If `structure` is provided, library assumes that this is not low-level component, therefore all the injections receive the transformed `structure`.
The transformation converts all the low-system reducers to `Composite` objects.
If low-system already provided as `Composite` object, no transformation happens.
If you have nothing to inject, except `structure`, you can use short syntax to create `Composite` object:
`Structure(highLevelSystemStructure)`, which is alias for `Composite({structure: highLevelSystemStructure})`.

All the default implementations for high-level "terms" could be imported in `Defaults` object.

#### Reducer

Default: `Defaults.Reducer`

Interface: `(structure: mixed): Reducer`

#### Middleware

Default: `Defaults.Middleware`

Interface: `(structure: mixed): Middleware`


#### Equality

Default: `Defaults.Equality`

Interface: `(structure: mixed): Equality`

#### Subscribe

Default: `structure => Wrappers.Subscribe(Defaults.Subscribe(structure), equality)`

`Wrappers.Subscribe` (based on given equality) checks the state changes and execute listener only in case, when state was changed.
So, you may also want to wrap your subscribe injection with `Wrappers.Subscribe` the same way as `Defaults.Subscribe`
> If equality is not provided, default equality will be used

Interface: `(structure: mixed): Subscribe`

#### Redux

Default: `Defaults.Redux`

Interface: `(structure: mixed): Redux`

#### Memoize

Default: `structure => Wrappers.Memoize(Defaults.Memoize(structure), equality)`

`Wrappers.Memoize` (based on given equality) checks the stage changes and caches result of the callback.
So, you may also want to wrap your memoize injection with `Wrappers.Memoize` the same way as `Defaults.Memoize`
> If equality is not provided, default equality will be used

Interface: `(structure: mixed): Memoize`
