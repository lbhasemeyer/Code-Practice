const isSquare = require('./isSquare-CW.js');

describe('isSquare', () => {
  it('test cases pass', () => {
    expect(isSquare(-1)).toEqual(false);
    expect(isSquare(0)).toEqual(true);
    expect(isSquare(3)).toEqual(false);
    expect(isSquare(4)).toEqual(true);
    expect(isSquare(25)).toEqual(true);
    expect(isSquare(26)).toEqual(false);
  });
});