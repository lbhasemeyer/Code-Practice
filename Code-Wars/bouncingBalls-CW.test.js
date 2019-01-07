const bouncingBalls = require('./bouncingBalls-CW.js');

describe('bouncingBalls', () => {
  it('test cases pass', () => {
    expect(bouncingBalls(3.0, 0.66, 1.5)).toEqual(3);
    expect(bouncingBalls(30.0, 0.66, 1.5)).toEqual(15);
  });
});