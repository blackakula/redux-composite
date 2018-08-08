# Subscribe

Store interface in `Redux` provides you `subscribe()` method.
But there is only global `subscribe()`. What if you want to subscribe for low-level store changes?
Let's say, we have 3 low-level states:
- boolean `toggle` `state1`
- array of 2 number states (`state2` and `state3`)

And our task is to aggregate them in high-level state: `{toggle: state1, inc: [state2, state3]}`.

Define first our low-level reducers and the high-level state structure:
```
const toggle = (state, action) => state === undefined ? false : (action.type === 'TOGGLE' ? !state : state);
const inc = (state, action) => state === undefined ? 0 : (action.type === 'INCREMENT' ? state + 1 : state);
let highLevelState = {toggle: false, inc: [1, 2]};
```

According to design our composite structure would be:
```
const composite1 = Structure({
    toggle,
    inc: [inc, inc]
});
```

Having the array of listeners, now we can define our high-level `dispatch()` method returned by original `createStore()` (like `Redux`):
```
let listeners = [];

const highLevelDispatch1 = (reducer => action => {
    const newState = reducer(highLevelState, action);
    if (newState !== highLevelState) {
        highLevelState = newState;
        listeners.map(listener => listener());
    }
})(composite1.reducer);

const createStore1 = () => ({
    getState: () => highLevelState,
    dispatch: highLevelDispatch1,
    subscribe: listener => {
        listeners.push(listener);
        return () => listeners = listeners.filter(l => l !== listener);
    }
});
```

Ok, preconditions are set. And then after initializing the composite, we receive needed store `subscribe()` method for each low-level state:
```
composite1.createStore({createStore: createStore1})();
composite1.store.toggle.subscribe(({getState}) => {
    if (getState()) {
        composite1.store.inc[1].dispatch({type: 'INCREMENT'});
    }
});
```

You can also subscribe from the top level to any low-level state change:
```
composite1.subscribe({
    toggle: ({getState, dispatch}) => {
        if (getState()) {
            dispatch({type: 'TOGGLE'});
        }
    }
});
```

So, what will happen if we dispatch `TOGGLE` action type:
```
composite1.store.toggle.dispatch({type: 'TOGGLE'});
// highLevelState is {toggle: false, inc: [1, 3]}
```

When we've dispatched `TOGGLE`, `state1` become `true` - and first subscriber triggered - and dispatched `INCREMENT` on `state3` of the `inc` array.
That's how `state3` transformed from 2 to 3.
And then second subscriber triggered, because `state1` is `true` - it dispatched the `TOGGLE` again.
That's how `state1` become `false` again.

What if our sub-states are already complex and have internal structure inside? For example:
```
highLevelState = {toggle: false, inc: [1, 2]};
const composite2 = Structure({
    toggle,
    inc: Structure([inc, inc])
});

listeners = [];
const highLevelDispatch2 = (reducer => action => {
    const newState = reducer(highLevelState, action);
    if (newState !== highLevelState) {
        highLevelState = newState;
        listeners.map(listener => listener());
    }
})(composite2.reducer);

const createStore2 = () => ({
    getState: () => highLevelState,
    dispatch: highLevelDispatch2,
    subscribe: listener => {
        listeners.push(listener);
        return () => listeners = listeners.filter(l => l !== listener);
    }
});
```

Notice, that `inc` is not simply an array anymore, but structure of the array.
Than the `inc` property of store would be devided into `store` to access store methods (like `subscribe()`) and `structure` to access internal store of sub-structure:
```
composite2.createStore({createStore: createStore2})();

const unsubscribe = composite2.store.inc.store.subscribe(() => composite2.store.toggle.dispatch({type: 'TOGGLE'}));
composite2.store.inc.structure[1].dispatch({type: 'INCREMENT'});
// highLevelState is {toggle: true, inc: [1, 3]}
unsubscribe();
```

When we've dispatched `INCREMENT` for the `state3`, `inc` state changed - that's why listenered was triggered.
The listener dispatched `TOGGLE` - and the `state1` become `true`.

And, as you can see, each `subscribe()` method returns `unsubscribe()` (if your original `subscribe()` method returns `unsubscribe()` in `createStore()` as in `Redux`)

This way we have `subscribe()` methods for each sub-state... and even sub-sub-states and so on.

Full example could be found in [examples/subscribe.js](../examples/subscribe.js)
