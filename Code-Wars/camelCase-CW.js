// Complete the solution so that the function will break up camel casing, using a space between words.

function camelCase(string) {
  let initialString = string;
  string.split('').forEach(letter => {
    if(letter === letter.toUpperCase()) {
      initialString = initialString.replace(letter, ' '+letter);
    }
  });
  return initialString;
}

module.exports = camelCase;