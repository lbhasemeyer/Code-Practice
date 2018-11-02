var isSquare = function(n){
  return (Math.sqrt(n) % 1 === 0) ? true : false;
}

module.exports = isSquare;