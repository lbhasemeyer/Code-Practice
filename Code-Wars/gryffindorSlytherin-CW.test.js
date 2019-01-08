const gryffindorSlytherin = require('./gryffindorSlytherin-CW.js');

describe('gryffindorSlytherin', () => {
  it('test cases pass', () => {
    expect(gryffindorSlytherin([100, 'yes'],[100, 'no'])).toEqual("Gryffindor wins!");
    expect(gryffindorSlytherin([350, 'no'],[250, 'yes'])).toEqual("Slytherin wins!");
    expect(gryffindorSlytherin([100, 'yes'],[250, 'no'])).toEqual("It's a draw!");
  });
});
