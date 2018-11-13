const supermarketQueue = require('./supermarketQueue-CW.js');

describe('supermarketQueue', () => {
  it('test cases pass', () => {
	expect(supermarketQueue([], 1)).toEqual(0);
	expect(supermarketQueue([1,2,3,4], 1)).toEqual(10);
	expect(supermarketQueue([2,2,3,3,4,4], 2)).toEqual(9);
	expect(supermarketQueue([1,2,3,4,5], 100)).toEqual(5);
  });
});