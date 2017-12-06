// @flow

import { partition } from 'itertools';

import { date } from '../date';
import { INPUTS } from './fixtures';

describe('dates', () => {
    const decoder = date;
    const [okay, not_okay] = partition(INPUTS, o => Object.prototype.toString.call(o) === '[object Date]');

    it('valid', () => {
        expect(okay.length).not.toBe(0);
        for (const value of okay) {
            expect(decoder(value).unwrap()).toBe(value);
        }
    });

    it('invalid', () => {
        expect(not_okay.length).not.toBe(0);
        for (const value of not_okay) {
            expect(decoder(value).isErr()).toBe(true);
        }
    });
});