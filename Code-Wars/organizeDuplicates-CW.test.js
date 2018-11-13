const organizeDuplicates = require('./organizeDuplicates-CW.js');

describe('organizeDuplicates', () => {
  it('test cases pass', () => {
	expect(organizeDuplicates([3, 2, 6, 2, 1, 3])).toEqual([[3, 3], [2, 2], [6], [1]]);
	expect(organizeDuplicates([3, 2, 6, 2])).toEqual([[3], [2, 2], [6]]);
  });
});