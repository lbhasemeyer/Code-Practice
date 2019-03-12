// Task
// Given a string representing a simple fraction x/y, your function must return a string representing the corresponding mixed fraction in the following format:
// [sign]a b/c
// where a is integer part and b/c is irreducible proper fraction. There must be exactly one space between a and b/c. Provide [sign] only if negative (and non zero) and only at the beginning of the number (both integer part and fractional part must be provided absolute).
// If the x/y equals the integer part, return integer part only. If integer part is zero, return the irreducible proper fraction only. In both of these cases, the resulting string must not contain any spaces.
// Division by zero should raise an error (preferably, the standard zero division error of your language).
//
// Value ranges for x and y are between -10 000 000 and 10 000 000
//
// Examples
// Input: 42/9, expected result: 4 2/3.
// Input: 6/3, expedted result: 2.
// Input: 4/6, expected result: 2/3.
// Input: 0/18891, expected result: 0.
// Input: -10/7, expected result: -1 3/7.
// Inputs 0/0 or 3/0 must raise a zero division error.
// Note: Make sure not to modify the input of your function in-place, it is a bad practice.

// function findGCD = (num,denom) => (denom===0) ? num : findGCD(denom,num%denom);

function simpleFractionToMixedNumber(s){
  // let top = parseInt(s.split('/')[0]);
  // let bottom = parseInt(s.split('/')[1]);
  // if(bottom === 0){
  //   return false;
  // } else {
  //   if(top%bottom === 0 || top === bottom){
  //     return (top/bottom).toString()
  //   } else {
  //     let whole = (top/bottom) | 0;
  //     let newTop = top % bottom;
  //     let newBottom = parseInt(bottom);
  //     let gcd = findGCD(newTop,newBottom);
  //     let numerator = newTop/gcd;
  //     let denominator = newBottom/gcd;
  //     let fraction = Math.abs(numerator).toString() + "/" + Math.abs(denominator).toString();
  //     return whole ? (whole + ' ' + fraction) : fraction;
  //   }
  // }
}

module.exports = simpleFractionToMixedNumber;