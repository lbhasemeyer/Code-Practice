const formatNameList = require('./formatNameList-CW.js');

describe('formatNameList', () => {
  it('test cases pass', () => {
    expect(formatNameList([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}])).toEqual('Bart, Lisa, Maggie, Homer & Marge');
    expect(formatNameList([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'}])).toEqual('Bart, Lisa & Maggie');
    expect(formatNameList([{name: 'Bart'},{name: 'Lisa'}])).toEqual('Bart & Lisa');
    expect(formatNameList([{name: 'Bart'}])).toEqual('Bart');
  });
});