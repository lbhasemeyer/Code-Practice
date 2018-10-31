function isTriangle(a,b,c) {
   const totalSides = a + b + c;
   const largestSide = Math.max(a,b,c);
   // if adding two shorter sides combined is longer than the longest side, it's a triangle
   return (largestSide < totalSides - largestSide) ? true : false;
}

console.log(isTriangle(2, 2, 2));
console.log(isTriangle(1, 2, 5));