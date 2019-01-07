function iqTest(numbers){
  numbers = numbers.split(' ').map(number =>{
    return parseInt(number);
  });
  let even = numbers.filter(number => {
    return number % 2 === 0;
  });
  let odd = numbers.filter(number => {
    return number % 2 === 1;
  });
  return (even.length > odd.length) ? (numbers.indexOf(odd[0])+1) : (numbers.indexOf(even[0])+1);
}

module.exports = iqTest;