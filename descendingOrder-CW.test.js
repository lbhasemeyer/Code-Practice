const descendingOrder = require('./descendingOrder-CW.js');

describe('descendingOrder', () => {
  it('test cases pass', () => {
    expect(descendingOrder(0)).toEqual(0);
    expect(descendingOrder(1)).toEqual(1);
    expect(descendingOrder(123456789)).toEqual(987654321);
  });
});