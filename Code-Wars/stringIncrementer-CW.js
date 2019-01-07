// Your job is to write a function which increments a string, to create a new string. If the string already ends with a number, the number should be incremented by 1. If the string does not end with a number the number 1 should be appended to the new string.
//
// Examples:
// foo -> foo1
// foobar23 -> foobar24
// foo0042 -> foo0043
// foo9 -> foo10
// foo099 -> foo100
// Attention: If the number has leading zeros the amount of digits should be considered.

function stringIncrementer(strng) {
  if(strng.slice(-1).match(/[0-9]/)) {
    let numbersOfString = '';
    for ( let i = strng.length-1; i>=0; i--){
      if(strng[i].match(/[0-9]/)) {
        numbersOfString = strng[i] + numbersOfString;
        continue;
      }
      break;
    }
    let newNumber = (parseInt(numbersOfString) + 1).toString();
    while(newNumber.length < numbersOfString.length) {
      newNumber = '0' + newNumber;
    }
    return strng.split(numbersOfString)[0] + newNumber;
  } else {
    return strng + '1';
  }
}

module.exports = stringIncrementer;