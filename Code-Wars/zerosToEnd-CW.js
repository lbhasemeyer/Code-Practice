function zerosToEnd(arr) {
  let zeros = arr.filter(function(item){
    return item === 0;
  });
  let notZeros = arr.filter(function(item){
    return item !== 0;
  });
  return notZeros.concat(zeros);
}

module.exports = zerosToEnd;