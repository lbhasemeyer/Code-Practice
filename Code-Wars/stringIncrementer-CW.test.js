const stringIncrementer = require('./stringIncrementer-CW.js');

describe('stringIncrementer', () => {
  it('test cases pass', () => {
    expect(stringIncrementer("foobar000")).toEqual("foobar001");
    expect(stringIncrementer("foo")).toEqual("foo1");
    expect(stringIncrementer("foobar001")).toEqual("foobar002");
    expect(stringIncrementer("foobar99")).toEqual("foobar100");
    expect(stringIncrementer("foobar099")).toEqual("foobar100");
    expect(stringIncrementer("")).toEqual("1");
  });
});