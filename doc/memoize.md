# Memoize

> In computing, **memoization** or **memoisation** is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again.

Let's create function with closure, that always change it's state, when called:
```js
const counter = () => {
    let counter = 0;
    return () => counter++;
}
```

And again, we have 2 simple reducers:
```js
const toggle = (state, action) => state === undefined ? false : (action.type === 'TOGGLE' ? !state : state);
const inc = (state, action) => state === undefined ? 0 : (action.type === 'INCREMENT' ? state + 1 : state);
```
If we attach `counter()` to the `toggle` state change, we assume the `counter()` would be re-calculated only in case when `toggle` state changed.

So, if we dispatch something like `dispatch({type: 'TOGGLE'})`, the `counter()` will return updated value,
if we `dispatch({type: 'UNKNOWN'})`, the `counter()` will return previous value.

Ok, as usual, let's create high-level state with boolean `toggle` state and 2 number states in `inc`:
```js
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
```

Now we can initialize the global store and create memoized versions of `counter()`,
using `structure` for sub-states and memoize for composite:
```js
composite1.createStore({createStore: createStore1})();

const memoized1 = composite1.memoize({
    memoize: counter(),
    structure: {
        toggle: counter(),
        inc: [counter(), counter()]
    }
});
```

Let's confirm, that our functions are memoized and will always return the same value, unless state change:
```js
memoized1.memoize(); // 0 - counter triggered first time for the global state
memoized1.structure.toggle(); // 0 - counter triggered first time for the toggle
memoized1.structure.inc[0](); // 0 - counter triggered first time for the first state of inc
memoized1.structure.inc[1](); // 0 - counter triggered first time for the second state of inc
memoized1.memoize(); // still 0 - counter was memoized for the global state
memoized1.structure.toggle(); // still 0 - counter was memoized for the toggle
memoized1.structure.inc[0](); // still 0 - counter was memoized for the first state of inc
memoized1.structure.inc[1](); // still 0 - counter was memoized for the second state of inc
```

Let's change some sub-states and check results of our memoized functions
```js
composite1.dispatch({type: 'COMPOSITE', composite: {
    toggle: {type: 'TOGGLE'},
    inc: [, {type: 'INCREMENT'}]
}});

memoized1.memoize(); // 1 - counter triggered, because the global state changed
memoized1.structure.toggle(); // 1 - counter triggered, because the toggle state changed
memoized1.structure.inc[0](); // 0 - counter returns memoized value, because the first state of inc was not changed
memoized1.structure.inc[1](); // 1 - counter triggered, because the second state of inc changed
```

What if our sub-states are already complex and have internal structure inside? For example:
```js
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
```

Notice, that `inc` is not simply an array anymore, but structure of the array.
Than the `inc` property of store would be devided into `memoize` for the function of inc state and `structure` to access internal memoization of sub-structure:
```js
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
```

As you can see, we defined a bit more complicated functions -
memoize functions of complex states receive the memoized functions of the internal `structure`
as long as store methods like `getState()`.
Let's trigger memoized functions two times to check they're memoized.
```js
memoized2.memoize(); // 1 - toggle is false, so we returned first state of inc
memoized2.structure.toggle(); // 0 - counter triggered first time for the toggle
memoized2.structure.inc.structure[0](); // 0 - counter triggered first time for the first state of inc
memoized2.structure.inc.structure[1](); // 0 - counter triggered first time for the second state of inc
memoized2.structure.inc.memoize(); // 0 - both counters of first and second inc states are 0 as we see above

memoized2.memoize(); // still 1 - memoized value, state didn't change
memoized2.structure.toggle(); // still 0 - counter was memoized for the toggle
memoized2.structure.inc.structure[0](); // still 0 - counter was memoized for the first state of inc
memoized2.structure.inc.structure[1](); // still 0 - counter was memoized for the second state of inc
memoized2.structure.inc.memoize(); // still 0 - inc function result was also memoized
```

Let's change some sub-states and check results of our memoized functions
```js
composite2.dispatch({type: 'COMPOSITE', composite: {
    toggle: {type: 'TOGGLE'},
    inc: [, {type: 'INCREMENT'}]
}});

memoized2.memoize(); // 3 - toggle was changed to true, state changed, result re-calculated
memoized2.structure.toggle(); // 1 - counter triggered, because the toggle state changed
memoized2.structure.inc.structure[0](); // 0 - counter returns memoized value, because the first state of inc was not changed
memoized2.structure.inc.structure[1](); // 1 - counter triggered, because the second state of inc changed
memoized2.structure.inc.memoize(); // 1 - function was re-calculated and returned sum of 2 inner memoized functions results
```

This way we can `memoize()` functions for each sub-state... and even sub-sub-states and so on.

Full example could be found in [examples/memoize.js](../examples/memoize.js)

Read next: [Composite](composite.md)
