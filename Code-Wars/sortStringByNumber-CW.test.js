const sortStringByNumber = require('./sortStringByNumber-CW.js');

describe('sortStringByNumber', () => {
  it('test cases pass', () => {
    expect(sortStringByNumber("is2 Thi1s T4est 3a")).toEqual("Thi1s is2 3a T4est");
    expect(sortStringByNumber("4of Fo1r pe6ople g3ood th5e the2")).toEqual("Fo1r the2 g3ood 4of th5e pe6ople");
    expect(sortStringByNumber("")).toEqual("");
  });
});