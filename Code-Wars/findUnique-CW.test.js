const findUnique = require('./findUnique-CW.js');

describe('findUnique', () => {
  it('test cases pass', () => {
    expect(findUnique([ 0, 1, 0 ])).toEqual(1);
    expect(findUnique([ 1, 1, 1, 2, 1, 1 ])).toEqual(2);
    expect(findUnique([ 3, 10, 3, 3, 3 ])).toEqual(10);
  });
});