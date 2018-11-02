const longestSubstring = require('./longestSubstring.js');

describe('longestSubstring', () => {
  it('test cases pass', () => {
    expect(longestSubstring('kaabadefghaabbaagad')).toEqual('aabbaa');
    expect(longestSubstring('abcc')).toEqual('bcc');
  });
});