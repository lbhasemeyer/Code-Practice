// Build Tower by the following given argument:
// number of floors (integer and always greater than 0).
//
// Tower block is represented as *
//
// for example, a tower of 3 floors looks like below
//
// [
//   '  *  ',
//   ' *** ',
//   '*****'
// ]

function buildTower(nFloors) {
  let finalArray = [];
  for(let i = nFloors; i > 0; i--) {
    let spaces = ' '.repeat((nFloors - i));
    finalArray.push(spaces + '*'.repeat(i + i - 1) + spaces);
  }
  return finalArray.reverse();
}

module.exports = buildTower;