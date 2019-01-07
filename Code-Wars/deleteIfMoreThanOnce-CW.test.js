const deleteIfMoreThanOnce = require('./deleteIfMoreThanOnce-CW.js');

describe('deleteIfMoreThanOnce', () => {
  it('test cases pass', () => {
    expect(deleteIfMoreThanOnce([20,37,20,21], 1)).toEqual([20,37,21])
    expect(deleteIfMoreThanOnce([1,1,3,3,7,2,2,2,2], 3)).toEqual([1, 1, 3, 3, 7, 2, 2, 2])
  });
});