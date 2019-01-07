const arrayDiff = require('./arrayDiff-CW.js');

describe('arrayDiff', () => {
  it('test cases pass', () => {
    expect(arrayDiff([], [4, 5])).toEqual([]);
    expect(arrayDiff([3, 4], [3])).toEqual([4]);
    expect(arrayDiff([1,8,2], [])).toEqual([1,8,2]);
  });
});