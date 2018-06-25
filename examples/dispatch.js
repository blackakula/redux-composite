import {Structure} from 'redux-composite';

const toggle = (state, action) => state === undefined ? false : (action.type === 'TOGGLE' ? !state : state);
const inc = (state, action) => state === undefined ? 0 : (action.type === 'INCREMENT' ? state + 1 : state);

let highLevelState1 = {toggle: false, child: [1, 2]};
const composite1 = Structure({
    toggle,
    child: [inc, inc]
});
const highLevelDispatch1 = action => {
    return highLevelState1 = composite1.reducer(highLevelState1, action);
};
composite1.init({dispatch: highLevelDispatch1})
const store1 = composite1.store;

store1.toggle.dispatch({type: 'TOGGLE'}); // highLevelState1 is {toggle: true, child: [1, 2]}
store1.child[1].dispatch({type: 'INCREMENT'}); // highLevelState1 is {toggle: true, child: [1, 3]}

let highLevelState2 = {toggle: false, child: [1, 2]};
const composite2 = Structure({
    toggle,
    child: Structure([inc, inc])
});
const highLevelDispatch2 = action => {
    return highLevelState2 = composite2.reducer(highLevelState2, action);
};
composite2.init({dispatch: highLevelDispatch2})
const store2 = composite2.store;

store2.child.store.dispatch({
    type: 'COMPOSITE',
    composite: [{type: 'INCREMENT'}, {type: 'INCREMENT'}]
}); // highLevelState2 is {toggle: false, child: [2, 3]}

store2.child.structure[0].dispatch({type: 'INCREMENT'}); // highLevelState2 is {toggle: false, child: [3, 3]}
