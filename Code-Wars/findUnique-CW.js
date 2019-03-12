function findUnique(arr) {
  let unique = arr.filter(element => {
    return (arr.indexOf(element) === arr.lastIndexOf(element));
  });
  return unique[0];
}

module.exports = findUnique;
