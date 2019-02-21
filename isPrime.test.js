const isPrime = require('./isPrime.js');

describe('isPrime', () => {
    it('test cases pass', () => {
        expect(isPrime(3)).toEqual(true);
        expect(isPrime(10)).toEqual(false);
        expect(isPrime(-30)).toEqual(false);
    });
});