import {Structure} from 'redux-composite';

const toggle = (state, action) => state === undefined ? false : (action.type === 'TOGGLE' ? !state : state);
const inc = (state, action) => state === undefined ? 0 : (action.type === 'INCREMENT' ? state + 1 : state);

toggle(true, {type: 'TOGGLE'}); // false
inc(2, {type: 'INCREMENT'}); // false

const composite1 = Structure({toggle, inc}).reducer;
composite1({toggle: true, inc: 2}, {
    type: 'COMPOSITE',
    composite: {
        toggle: {type: 'TOGGLE'},
        inc: {type: 'INCREMENT'}
    }
}); // {toggle: false, inc: 3}

const composite2 = Structure({inc1: inc, inc2: inc}).reducer;
composite2({inc1: 1, inc2: 1}, {
    type: 'COMPOSITE',
    composite: {inc2: {type: 'INCREMENT'}}
}); // {inc1: 1, inc2: 2}

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
            child: [ , {type: 'INCREMENT'}]
        }
    }
); // {toggle: false, child: [1, 3]}
