const shuffleCards = require('./shuffleCards.js');

describe.only('shuffleCards', () => {
  it('test cases pass', () => {
    const shuffleResult = shuffleCards();
    expect(shuffleResult).toHaveLength(52);
    const shuffleResultSet = new Set([...shuffleResult]);
    const shuffleSpread = [...shuffleResult];
    const shuffleSetSpread = [...shuffleResultSet];
    expect(shuffleSpread).toEqual(shuffleSetSpread);
  });
});