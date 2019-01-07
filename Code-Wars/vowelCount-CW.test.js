const vowelCount = require('./vowelCount-CW.js');

describe('vowelCount', () => {
  it('test cases pass', () => {
    expect(vowelCount("abracadabra")).toEqual(5);
  });
});