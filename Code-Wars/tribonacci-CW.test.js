const tribonacci = require('./tribonacci-CW.js');

describe('tribonacci', () => {
  it('test cases pass', () => {
    expect(tribonacci([1,1,1],10)).toEqual([1,1,1,3,5,9,17,31,57,105]);
    expect(tribonacci([0,0,1],10)).toEqual([0,0,1,1,2,4,7,13,24,44]);
    expect(tribonacci([1,2,3],10)).toEqual([1,2,3,6,11,20,37,68,125,230]);
    expect(tribonacci([1,0,0],10)).toEqual([1,0,0,1,1,2,4,7,13,24]);
    expect(tribonacci([1,1,1],1)).toEqual([1]);
  });
});