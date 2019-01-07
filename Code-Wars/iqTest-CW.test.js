const iqTest = require('./iqTest-CW.js');

describe('iqTest', () => {
  it('test cases pass', () => {
    expect(iqTest("2 4 7 8 10")).toEqual(3);
    expect(iqTest("1 2 2")).toEqual(1);
  });
});