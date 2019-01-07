// Sam is an avid collector of numbers. Every time he finds a new number he throws it on the top of his number-pile. Help Sam organise his collection so he can take it to the International Number Collectors Conference in Cologne.
// Given an array of numbers, your function should return an array of arrays, where each subarray contains all the duplicates of a particular number. Subarrays should be in the same order as the first occurence of the number they contain:
// group([3, 2, 6, 2, 1, 3])
// >>> [[3, 3], [2, 2], [6], [1]]

function group(arr) {
  let result = [];
  while(arr.length) {
    result.push(arr.filter(item => {return item === arr[0]}));
    arr = arr.filter(item => {return item !== arr[0]});
  }
  return result;
}

module.exports = group;