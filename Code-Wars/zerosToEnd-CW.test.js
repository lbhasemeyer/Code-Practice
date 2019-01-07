const zerosToEnd = require('./zerosToEnd-CW.js');

describe('zerosToEnd', () => {
  it('test cases pass', () => {
    expect(zerosToEnd([false,1,0,1,2,0,1,3,"a"])).toEqual([false,1,1,2,1,3,"a",0,0]);
    expect(zerosToEnd([7,2,2])).toEqual([7,2,2]);
  });
});