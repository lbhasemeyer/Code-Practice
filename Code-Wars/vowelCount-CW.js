// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, and u as vowels for this Kata.
// The input string will only consist of lower case letters and/or spaces.

function vowelCount(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return (str.split('').filter(function(item) {
    if(vowels.includes(item)) {
      return item;
    }
  })).length;
}

module.exports = vowelCount;