function queueTime(customers, n) {
  if(customers.length === 1) {
    return customers[0];
  } else if(n > customers.length) {
    return (customers.length === 0) ? 0 : customers[customers.length-1];
  } else {
    let sums = {};
    for(let i=0; i<n; i++) {
      sums[i] = customers[0];
      customers.shift();
    }
    for(let i=0; i<customers.length; i++) {
      sums[Object.keys(sums).reduce(function(a, b){ return sums[a] < sums[b] ? a : b })] += customers[i];
    }
    return sums[Object.keys(sums).reduce(function(a, b){ return sums[a] > sums[b] ? a : b })];
  }
}

module.exports = queueTime;