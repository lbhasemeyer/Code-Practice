// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
// It should remove all values from list a, which are present in list b.

function array_diff(a, b) {
  return a.filter(item => {
    return !b.includes(item);
  });
}

module.exports = array_diff;