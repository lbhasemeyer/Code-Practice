const multiTapPhone = require('./multiTapPhone-CW.js');

describe('multiTapPhone', () => {
  it('test cases pass', () => {
    expect(multiTapPhone("LOL")).toEqual(9);
    expect(multiTapPhone("HOW R U")).toEqual(13);
  });
});