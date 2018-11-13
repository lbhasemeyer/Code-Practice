round = function(number) {
  return(number - parseInt(number) < .5) ? parseInt(number) : parseInt(number) + 1;
};

ceil = function(number) {
  return (parseInt(number) === number) ? number : parseInt(number) + 1;
};

floor = function(number) {
  return parseInt(number);
};

module.exports = {round, ceil, floor};