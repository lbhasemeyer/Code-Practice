const bowling = require('./bowling-CW.js');

describe('bowling', () => {
  it('test cases pass', () => {
    expect(bowling('43 09 62 62 31 X X 72 45 1/2')).toEqual(112);
	expect(bowling('62 72 63 16 60 53 13 6/ 3/ 12')).toEqual(78);
	expect(bowling('43 09 62 62 31 X X 72 45 XX1')).toEqual(121);
	expect(bowling('11 11 11 11 11 11 1/ 11 11 11')).toEqual(29);
	expect(bowling('X X X X X X X X X XXX')).toEqual(300);
	expect(bowling('11 11 11 11 11 11 11 11 11 11')).toEqual(20);
	expect(bowling('11 11 11 11 11 11 X 11 11 11')).toEqual(30);
  });
});