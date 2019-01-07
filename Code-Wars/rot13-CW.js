// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.
//
// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
//
// Please note that using "encode" in Python is considered cheating.


function rot13(message){
  let result = '';
  for (let char of message){
    let isUpperCase = char !== char.toLowerCase();
    let newLetter;
    if (!char.match(/[a-z]/i)){
      result += char;
    } else {
      let code = char.toLowerCase().charCodeAt();
      newLetter = (code <= 109) ? String.fromCharCode(code + 13)
        : String.fromCharCode(code - 13);
      isUpperCase ?
        result += newLetter.toUpperCase() :
        result += newLetter;
    }
  }
  return result
}



module.exports = rot13;