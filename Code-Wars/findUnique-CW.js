function findUniq(arr) {
  const first = arr.sort()[0];
  const second = arr.sort()[1];
  const last = arr.sort()[arr.length-1];
  if(first !== second && first !== last){return first;}
  else if(second !== first && second !== last){return second;}
  else if(last !== first && last !== second){return last;}
}

module.exports = findUniq;