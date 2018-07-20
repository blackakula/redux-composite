import Reduce from '../Prettify/Reduce';
import Expand from '../Prettify/Expand';
import expect from 'expect';

export const test = () => {
    const reduced1 = {type: 'ACTION1\\{a}\\[1]\nACTION2\\{b}', payload: {'{b}': {data: 'SOMETHING'}}};
    const expanded1 = {type: 'COMPOSITE', composite: {
        a: [ , {type: 'ACTION1'}],
        b: {type: 'ACTION2', data: 'SOMETHING'}
    }};
    const reduced2 = {type: 'SOME_ACTION', data: 'SOMETHING'};
    const expanded2 = reduced2;
    expect(Reduce(expanded1)).toEqual(reduced1);
    expect(Reduce(expanded2)).toEqual(reduced2);
    expect(Expand(reduced1)).toEqual(expanded1);
    expect(Expand(reduced2)).toEqual(expanded2);
}

export default test;
