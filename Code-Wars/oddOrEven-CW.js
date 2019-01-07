// Given an array of numbers (a list in groovy), determine whether the sum of all of the numbers is odd or even.
// Give your answer in string format as 'odd' or 'even'.
// If the input array is empty consider it as: [0] (array with a zero).

function oddOrEven(arr) {
  return arr.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';
}

module.exports = oddOrEven;