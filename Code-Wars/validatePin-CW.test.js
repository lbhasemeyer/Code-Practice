const validatePin = require('./validatePin-CW.js');

describe('validatePin', () => {
  it('test cases pass', () => {
    expect(validatePin("-1234")).toEqual(false);
    expect(validatePin("1.234")).toEqual(false);
    expect(validatePin("-1.234")).toEqual(false);
    expect(validatePin("00000000")).toEqual(false);
    expect(validatePin("a234")).toEqual(false);
    expect(validatePin(".234")).toEqual(false);
    expect(validatePin("1111")).toEqual(true);
    expect(validatePin("123456")).toEqual(true);
    expect(validatePin("098765")).toEqual(true);
    expect(validatePin("000000")).toEqual(true);
  });
});