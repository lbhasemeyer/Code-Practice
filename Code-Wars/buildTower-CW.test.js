const buildTower = require('./buildTower-CW.js');

describe('buildTower', () => {
  it('test cases pass', () => {
    expect(buildTower(1)).toEqual(["*"]);
    expect(buildTower(2)).toEqual([" * ","***"]);
    expect(buildTower(3)).toEqual(["  *  "," *** ","*****"]);
  });
});