var board = [
  [7, 4, 3, 9, 5, 1, 6, 8, 2],
  [1, 6, 2, 4, 8, 7, 3, 9, 5],
  [9, 5, 8, 6, 3, 2, 7, 1, 4],
  [2, 1, 9, 8, 7, 3, 5, 4, 6],
  [3, 7, 4, 5, 6, 9, 1, 2, 8],
  [5, 8, 6, 1, 2, 4, 9, 7, 3],
  [4, 9, 5, 2, 1, 6, 8, 3, 7],
  [8, 2, 7, 3, 9, 5, 4, 6, 1],
  [6, 3, 1, 7, 4, 8, 2, 5, 9]
]

function isUniqueArr(array) {
  var result = Array.from(new Set(array));
  return result.length < 9 ? false : true;
}

var isSudoku = function(board) {
  let result = true;
  // check rows
  board.forEach(row => {
    if(!isUniqueArr(row)) {
      result = false;
    }
  });
  //check columns
  board[0].forEach((number, index) => {
    if(board[1][index] === number || board[2][index] === number || board[3][index] === number || board[4][index] === number || board[5][index] === number || board[6][index] === number || board[7][index] === number || board[8][index] === number) {
      result = false;
    }
  });
  // check 3x3 squares
  for (var i=0; i < 9; i+=3) {
    for (var j=0; j < 9; j+=3) {
      let threeArray;
      threeArray = (board[i].slice(j, j+3));
      threeArray = threeArray.concat(board[i+1].slice(j, j+3));
      threeArray = threeArray.concat(board[i+2].slice(j, j+3));
      if(!isUniqueArr(threeArray)) {
        result = false;
      }
    }
  }
  return result;
}

module.exports = isSudoku;















// /**

// 9x9 grid of ints between 1-9
// 1 2 3 | 4 5 6 | 7 8 9
// 4 5 6 | 7 8 9 | 1 2 3
// 7 8 9 | 1 2 3 | 4 5 6
// ---------------------
// 2 3 5 | 3 2 1 | 9 7 1
// ...

// 1. All the numbers in each row are unique
// 2. All the numbers in each col are unique
// 3. All the numbers in each "block" are unique


// board = [
//   [1, 2, 3, 4, 5, 6, ...],
//   [4, 5, 6, ...]
// ]

// */

// var board = [
//   [7, 4, 3, 9, 5, 1, 6, 8, 2],
//   [1, 6, 2, 4, 8, 7, 3, 9, 5],
//   [9, 5, 8, 6, 3, 2, 7, 1, 4],
//   [2, 1, 9, 8, 7, 3, 5, 4, 6],
//   [3, 7, 4, 5, 6, 9, 1, 2, 8],
//   [5, 8, 6, 1, 2, 4, 9, 7, 3],
//   [4, 9, 5, 2, 1, 6, 8, 3, 7],
//   [8, 2, 7, 3, 9, 5, 4, 6, 1],
//   [6, 3, 1, 7, 4, 8, 2, 5, 9]
// ]

// function isUnique(array) {
//   let filteredArr = row.reduce(function(totalArr, number) => {
//     if(!totalArr.includes(number)){
//       return totalArr += number;
//     }
//   });
//   if(filteredArr.length !== 9){
//     return false;
//   }
//   return true;
// }

// function isSudokuSolution(board) {
//   let placesObject = {};
// //   let placesObject = {0: [1, 2, 3...], };
//   //check across
  
//   //go over each row, see if that number is in the same place in another array
//   let filteredArr = row.forEach(number) => {
//     if(placesObject[index]){
//       placesObject[index] = [];
//       placesObject[index].push(number);
//     } else {
//       placesObject[index].push(number);
//     }
//   }); 
//   let isIndexUnique = placesObject.keys.map(function(key){
//     return isUnique(placesObject[key]);
//   });
//   if(isIndexUnique.includes(false)){
//     return false;
//   }
  
//   //check indexes
//   board.forEach(function(row, index) {
//     let filteredArr = isUnique(row);
//     if(filteredArr === false){
//       return false;
//     }
//   }); 
  
//   //check blocks  
//   for(i=0; i<9; i+=3){
//     for(j=0; j<9; j+=3){
//       let builtArray = [];
//       builtArray.push(board[j].slice(i, i+2));
//       builtArray.push(board[j+1].slice(i, i+2));
//       builtArray.push(board[j+2].slice(i, i+2));
//       //do the unique check here
//       let builtArrayUnique = isUnique(builtArray);
//       if(builtArrayUnique === false){
//         return false;
//       }  
//     }
//   }
//   return true;
// }
