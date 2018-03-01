import {Structure} from 'redux-composite';

const toggle = (state, action) => state === undefined ? false : (action.type === 'TOGGLE' ? !state : state);
const inc = (state, action) => state === undefined ? 0 : (action.type === 'INCREMENT' ? state + 1 : state);

let highLevelState = {toggle: false, inc: 1};
const getHighLevelState = () => highLevelState;

const composite = Structure({
    toggle: toggle,
    inc: inc
});
const highLevelDispatch = action => {
    return highLevelState = composite.reducer(highLevelState, action);
};

const experimentalFunction = () => (start => {
    // heavy calculation
    while (new Date().getTime() < start + 1500);
    return start;
})(new Date().getTime());

const memoizeInit = composite.memoize(getHighLevelState);
const memoizedComposite = memoizeInit.memoize(experimentalFunction);
const memoizedToggle = memoizeInit.structure.toggle.memoize(experimentalFunction);

memoizedComposite();
memoizedToggle();

highLevelDispatch({type: 'COMPOSITE', composite: {
    inc: {type: 'INCREMENT'}
}}); // highLevelState is {toggle: false, inc: 2}

memoizedComposite();
memoizedToggle();
