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
    subscribe: listener => listeners.push(listener)
});
```

Ok, preconditions are set. And then after initializing the composite, we receive needed store `subscribe()` method for each low-level state:
```
composite1.createStore({createStore: createStore1})();
composite1.store.toggle.subscribe(({getState, dispatch}) => {
    if (getState()) {
        dispatch({type: 'TOGGLE'});
    }
});
```

You can also subscribe from the top level to any low-level state change:
```
