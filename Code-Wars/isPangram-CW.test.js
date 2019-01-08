const isPangram = require('./isPangram-CW.js');

describe('isPangram', () => {
  it('test cases pass', () => {
    let string = "The quick brown fox jumps over the lazy dog."
    expect(isPangram(string)).toEqual(true);
    string = "This is not a pangram."
    expect(isPangram(string)).toEqual(false);
  });
});