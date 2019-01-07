const camelCase = require('./camelCase-CW.js');

describe('camelCase', () => {
  it('test cases pass', () => {
    expect(camelCase('camelCasing')).toEqual('camel Casing');
  });
});