// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.
// Rules for a smiling face:
// -Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// -A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// -Every smiling face must have a smiling mouth that should be marked with either ) or D.
// No additional characters are allowed except for those mentioned.
// Valid smiley face examples:
// :) :D ;-D :~)
// Invalid smiley faces:
// ;( :> :} :]

function countSmiles(arr) {
  let good = arr.filter(face => {
      if(face.length === 3) {
        return ((face.charAt(0) === ':' || face.charAt(0) === ';')
        && (face.charAt(1) === '-' || face.charAt(1) === '~')
        && (face.charAt(2) === 'D' || face.charAt(2) === ')'));
      } else if(face.length === 2) {
        return ((face.charAt(0) === ':' || face.charAt(0) === ';')
        && (face.charAt(1) === 'D' || face.charAt(1) === ')'));
      }
  });
  return good.length;
}

module.exports = countSmiles;