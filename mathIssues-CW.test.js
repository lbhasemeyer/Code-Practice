const mathIssues = require('./mathIssues-CW.js');

describe('mathIssues', () => {
  it('test cases pass', () => {
    expect(mathIssues.round(0.4)).toEqual(0);
	expect(mathIssues.round(0.5)).toEqual(1);
	expect(mathIssues.ceil(0.4)).toEqual(1);
	expect(mathIssues.ceil(0.5)).toEqual(1);
	expect(mathIssues.floor(0.4)).toEqual(0);
	expect(mathIssues.floor(0.5)).toEqual(0);
  });
});