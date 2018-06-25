import {Structure, Redux} from 'redux-composite';

let highLevelState = {toggle: false, inc: [1, 2]};
const getHighLevelState = () => highLevelState;
const dummyReducer = () => {};

const composite1 = Structure({
    toggle: dummyReducer,
    inc: [dummyReducer, dummyReducer]
});
const redux1 = Redux(composite1)({getState: getHighLevelState});

redux1.toggle.getState(); // false
redux1.inc[0].getState(); // 1
redux1.inc[1].getState(); // 2

const composite2 = Structure({
    toggle: dummyReducer,
    inc: Structure([dummyReducer, dummyReducer])
});
const redux2 = Redux(composite2)({getState: getHighLevelState});

redux2.toggle.getState(); // false
redux2.inc.redux.getState(); // [1, 2]
redux2.inc.structure[0].getState(); // 1
redux2.inc.structure[1].getState(); // 2
highLevelState.inc[0] = 3;
redux2.inc.structure[0].getState(); // 3
