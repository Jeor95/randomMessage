import assert from 'assert';
import randomNumber from './randomMessage.js';

describe('randomNumber', () => {
    it('send a random number between 0 and 2', () => {
        const number = randomNumber(3);
        assert.ok(number === 0 || number === 1 || number === 2);
    })
    it()
})
