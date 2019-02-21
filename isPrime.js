const isPrime = (num) => {
    if(num === 2){
        return true;
    } else if((num < 2) || (num%2 === 0) || (isNaN(num) === true)){
        return false;
    } else {
        for(let i=3; i<Math.sqrt(num); i+=2){
            if(num%i === 0){
                return false;
            }
        }
    }
    return true;
}

module.exports = isPrime;