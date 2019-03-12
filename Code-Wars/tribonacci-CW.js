// As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(
function tribonacci(signature,n){
  if(n<=3){
    let returnThing = [];
    for(var i=n; i>0; i--){
      returnThing.push(signature[i]);
    }
    return returnThing;
  }
  for(var i=0; i<n-3; i++){
    let newNumber = signature.slice(-3).reduce(function(sum, number){
      return sum + number;
    });
    signature.push(newNumber);
  }
  return signature;
}
module.exports = tribonacci;