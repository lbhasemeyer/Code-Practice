function iqTest(numbers){
  numbers = numbers.split(' ').map(number =>{
      return parseInt(number);
  });
  let evens = numbers.filter(number => {
    return number%2 === 0;
  });
  let odds = numbers.filter(number => {
    return number%2 === 1;
  });
  return (evens.length > odds.length) ? numbers.indexOf(odds[0]+1) : numbers.indexOf(evens[0]+1);
}

module.exports = iqTest;