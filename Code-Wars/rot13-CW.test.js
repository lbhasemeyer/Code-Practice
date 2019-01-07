const rot13 = require('./rot13-CW.js');

describe('rot13', () => {
  it('test cases pass', () => {
    expect(rot13("test")).toEqual("grfg");
    expect(rot13("Test")).toEqual("Grfg");
  });
});