const simpleFractionToMixedNumber = require('./simpleFractionToMixedNumber-CW.js');

describe('simpleFractionToMixedNumber', () => {
  it('test cases pass', () => {
    expect(simpleFractionToMixedNumber('42/9')).toEqual('4 2/3');
    expect(simpleFractionToMixedNumber('6/3')).toEqual('2');
    expect(simpleFractionToMixedNumber('1/1')).toEqual('1');
    expect(simpleFractionToMixedNumber('11/11')).toEqual('1');
    expect(simpleFractionToMixedNumber('4/6')).toEqual('2/3');
    expect(simpleFractionToMixedNumber('0/18891')).toEqual('0');
    expect(simpleFractionToMixedNumber('-10/7')).toEqual('-1 3/7');
    expect(simpleFractionToMixedNumber('-22/-7')).toEqual('3 1/7');
    // expect(simpleFractionToMixedNumber('0/0')).toThrow(ZeroDivisionError);
    // expect(simpleFractionToMixedNumber('3/0')).toThrow(ZeroDivisionError);
  });
});