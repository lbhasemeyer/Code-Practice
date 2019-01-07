// As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(
function tribonacci(signature,n){
  let sumLastThreeAndAdd = function(array){
    const lastThree = array.slice(-3);
    let newDigit = lastThree.reduce(function(sum, item){
      return sum + item;
    });
    return signature.push(newDigit);
  }

  if(n === 0){
    return [];
  } else if(n<3){
    return signature.slice(0, n);
  }

  for(i=0; i<n-3; i++){
    sumLastThreeAndAdd(signature);
  }

  return signature;
}
module.exports = tribonacci;