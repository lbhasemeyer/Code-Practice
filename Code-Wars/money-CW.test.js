const money = require('./money-CW.js');

describe('money', () => {
  it('test cases pass', () => {
    expect(money(1000, 0.05, 0.18, 1100)).toEqual(3);
    expect(money(1000,0.01625,0.18,1200)).toEqual(14);
    expect(money(1000,0.05,0.18,1000)).toEqual(0);
  });
});