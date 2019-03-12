function zerosToEnd(arr) {
  let zeros = arr.filter(item => {
    return item === 0;
  });
  let nonZeros = arr.filter(item =>{
    return item !== 0;
  });
  return nonZeros.concat(zeros);
}

module.exports = zerosToEnd;