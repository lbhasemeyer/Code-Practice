// if adding two shorter sides combined is longer than the longest side, it's a triangle


function isTriangle(a,b,c) {
  let sorted = [a, b, c].sort();
  return ((sorted[0] + sorted[1]) > sorted[2]);
}

module.exports = isTriangle;