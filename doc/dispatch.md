# Dispatch

Store interface in `Redux` provides you `dispatch()` method.
But there is only global `dispatch()`. What if you want to dispatch low-level store change?
Let's say, we have 3 low-level states:
- boolean `toggle` `state1`
- array of 2 number states (`state2` and `state3`)

And our task is to aggregate them in high-level state: `{toggle: state1, inc: [state2, state3]}`.

Define first our low-level reducers and the high-level state structure:
```js
const toggle = (state, action) => state === undefined ? false : (action.type === 'TOGGLE' ? !state : state);
const inc = (state, action) => state === undefined ? 0 : (action.type === 'INCREMENT' ? state + 1 : state);
let highLevelState = {toggle: false, inc: [1, 2]};
```

According to design our composite structure would be:
```js
const composite1 = Structure({
    toggle,
    inc: [inc, inc]
});
```

Now we can define our high-level `dispatch()` method returned by original `createStore()` (like `Redux`):
```js
const highLevelDispatch1 = (reducer => action => {
    return highLevelState = reducer(highLevelState, action);
})(composite1.reducer);

const createStore1 = () => ({dispatch: highLevelDispatch1})
```

Ok, preconditions are set. And then after initializing the composite, we receive needed store `dispatch()` method for each low-level state:
```js
composite1.createStore({createStore: createStore1})()
const store1 = composite1.store;

store1.toggle.dispatch({type: 'TOGGLE'}); // highLevelState is {toggle: true, inc: [1, 2]}
store1.inc[1].dispatch({type: 'INCREMENT'}); // highLevelState is {toggle: true, inc: [1, 3]}
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
const createStore2 = () => ({dispatch: highLevelDispatch2});
```

Notice, that `inc` is not simply an array anymore, but structure of the array.
Than the `inc` property of store would be devided into `store` to access store methods (like `dispatch()`) and `structure` to access internal store of sub-structure:
```js
composite2.createStore({createStore: createStore2})()
const store2 = composite2.store;

store2.inc.store.dispatch({
    type: 'COMPOSITE',
    composite: [{type: 'INCREMENT'}, {type: 'INCREMENT'}]
}); // highLevelState is {toggle: false, inc: [2, 3]}

store2.inc.structure[0].dispatch({type: 'INCREMENT'}); // highLevelState is {toggle: false, child: [3, 3]}
```
This way we have `dispatch()` methods for each sub-state... and even sub-sub-states and so on.

Full example could be found in [examples/dispatch.js](../examples/dispatch.js)

Read next: [Subscribe](subscribe.md)
