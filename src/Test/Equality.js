import {Structure, Composite} from '../index';
import {increment, toggle, calculator} from './Reducer';
import expect from 'expect';

const test = () => {
    const simple = Structure({
        toggle,
        calc: [increment, Composite({
            reducer: calculator,
            equality: (prev, next) => Math.abs(next - prev) < 3
        })]
    });
    expect(simple.equality(
        {toggle: true, calc: [0, 1]}, // prev
        {toggle: true, calc: [0, 1]} // next
    )).toEqual(true);
    expect(simple.equality(
        {toggle: true, calc: [0, 1]}, // prev
        {toggle: true, calc: [1, 1]} // next
    )).toEqual(false);
    expect(simple.equality(
        {toggle: true, calc: [0, 1]}, // prev
        {toggle: true, calc: [0, -1]} // next
    )).toEqual(true);
    expect(simple.equality(
        {toggle: true, calc: [0, 1]}, // prev
        {toggle: true, calc: [0, 4]} // next
    )).toEqual(false);

    const complex = Structure({
        increment: Composite({
            reducer: increment,
            equality: (prev, next) => Math.abs(next - prev) > 3
        }),
        reducer: simple
    });
    expect(complex.equality(
        {increment: 1, reducer: {toggle: true, calc: [0, 1]}}, // prev
        {increment: 1, reducer: {toggle: true, calc: [0, 1]}} // next
    )).toEqual(false);
    expect(complex.equality(
        {increment: 1, reducer: {toggle: true, calc: [0, 1]}}, // prev
        {increment: 5, reducer: {toggle: true, calc: [0, 3]}} // next
    )).toEqual(true);
    expect(complex.equality(
        {increment: 1, reducer: {toggle: true, calc: [0, 1]}}, // prev
        {increment: 4, reducer: {toggle: true, calc: [0, 3]}} // next
    )).toEqual(false);
};
export default test;
