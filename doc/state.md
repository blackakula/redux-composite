# State

Store interface in `Redux` provides you `getState()` method.
Let's say, we have 3 low-level states:
- boolean `toggle` `state1`
- array of 2 number states (`state2` and `state3`)

And our task is to aggregate them in high-level state: `{toggle: state1, inc: [state2, state3]}`.

Each of low-level states wants to have its own `getState()` method (like [selectors](https://github.com/reduxjs/reselect)?), but the `Redux` provides us only one global `getState()`.

Let's say we have global state object with the high-level `getState()` method returned by original `createStore()` (like `Redux`):
```
let highLevelState = {toggle: false, inc: [1, 2]};
const createStore = () => ({getState: () => highLevelState});
```
According to design our composite structure would be:
```
const composite1 = Structure({
    toggle: () => {}, // reducers are dummy, because we don't use them
    inc: [() => {}, () => {}]
});
```

And then after initializing the composite, we receive needed store methods for each low-level state:
```
composite1.createStore({createStore})();
const store1 = composite1.store;

store1.toggle.getState(); // false for state1
store1.inc[0].getState(); // 1 for state2
store1.inc[1].getState(); // 2 for state3
```

What if our sub-states are already complex and have internal structure inside? For example:
```
const composite2 = Structure({
    toggle: () => {},
    inc: Structure([() => {}, () => {}])
});
```
Notice, that `inc` is not simply an array anymore, but structure of the array.
Than the `inc` property of store would be devided into `store` to access store methods (like `getState()`) and `structure` to access internal state of sub-structure:
```
composite2.createStore({createStore})();
const store2 = composite2.store;

store2.toggle.getState(); // false for toggle state
store2.inc.store.getState(); // [1, 2] for inc state
store2.inc.structure[0].getState(); // 1 for the first sub-state of inc
store2.inc.structure[1].getState(); // 2 for the second sub-state of inc
composite2.getState(); // {toggle: false, inc: [1, 2]} for the global state
```
This way we have `getState()` methods for each sub-state... and even sub-sub-states and so on.

Full example could be found in [examples/state.js](../examples/state.js)

Read next: [Dispatch](dispatch.md)
