const isTriangle = require('./isTriangle-CW.js');

describe('isTriangle', () => {
  it('test cases pass', () => {
    expect(isTriangle(1,2,2)).toEqual(true);
    expect(isTriangle(7,2,2)).toEqual(false);
  });
});
