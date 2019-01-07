const oddOrEven = require('./oddOrEven-CW.js');

describe('oddOrEven', () => {
  it('test cases pass', () => {
    expect(oddOrEven([0])).toEqual('even');
    expect(oddOrEven([1])).toEqual('odd');
    expect(oddOrEven([])).toEqual('even');
    expect(oddOrEven([0, 1, 5])).toEqual('even');
    expect(oddOrEven([0, 1, 3])).toEqual('even');
    expect(oddOrEven([1023, 1, 2])).toEqual('even');
    expect(oddOrEven([0, -1, -5])).toEqual('even');
    expect(oddOrEven([0, -1, -3])).toEqual('even');
    expect(oddOrEven([-1023, 1, -2])).toEqual('even');
    expect(oddOrEven([0, 1, 2])).toEqual('odd');
    expect(oddOrEven([0, 1, 4])).toEqual('odd');
    expect(oddOrEven([1023, 1, 3])).toEqual('odd');
    expect(oddOrEven([0, -1, 2])).toEqual('odd');
    expect(oddOrEven([0, 1, -4])).toEqual('odd');
    expect(oddOrEven([-1023, -1, 3])).toEqual('odd');
  });
});