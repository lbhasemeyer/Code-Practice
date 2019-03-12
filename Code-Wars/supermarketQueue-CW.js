// function queueTime(customers, n) {
//   if(customers.length === 1) {
//     return customers[0];
//   } else if(n > customers.length) {
//     return (customers.length === 0) ? 0 : customers[customers.length-1];
//   } else {
//     let sums = {};
//     for(let i=0; i<n; i++) {
//       sums[i] = customers[0];
//       customers.shift();
//     }
//     for(let i=0; i<customers.length; i++) {
//       sums[Object.keys(sums).reduce(function(a, b){ return sums[a] < sums[b] ? a : b })] += customers[i];
//     }
//     return sums[Object.keys(sums).reduce(function(a, b){ return sums[a] > sums[b] ? a : b })];
//   }
// }

function queueTime(customers, n) {
  if(customers.length === 1) {
    return customers[0];
  } else if(n === 1) {
    let totalTime = 0;
    customers.forEach(customer => {
      totalTime += customer;
    });
    return totalTime;
  } else if(n > customers.length) {
    return customers[customers.length-1];
  } else {
    let queueTracker = {};
    let sumTracker = {};
    // give each cashier their first person
    for(let i=0; i<n; i++) {
      queueTracker[i] = customers[0];
      sumTracker[i] = customers[0];
      customers.shift();
    }
    // doll out the remaining customers - find the shortest line, reduce all lines by that
    // add the new customer to the now empty queueTrackerKey, and their time to the right queue in sumTracker
    for(let i=0; i<customers.length; i++) {
      let smallestLineKey = Object.keys(queueTracker).reduce(function(a, b){ return queueTracker[a] < queueTracker[b] ? a : b });
      queueTracker = Object.keys(queueTracker).map(function(key){ return queueTracker[key] - queueTracker[smallestLineKey] });
      queueTracker[smallestLineKey] += customers[i];
      sumTracker[smallestLineKey] += customers[i];
    }
    return sumTracker[Object.keys(sumTracker).reduce(function(a, b){ return sumTracker[a] > sumTracker[b] ? a : b })];
  }
}

module.exports = queueTime;