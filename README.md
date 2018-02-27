# Redux Composite

Composing high-level [Labelled transition system](https://en.wikipedia.org/wiki/Transition_system) from small ones.

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

See the [complete reducers code](examples/reducers.js) in examples folder.
