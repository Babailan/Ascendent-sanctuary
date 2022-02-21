// with 2 method
function filledOrders(order, k) {
  // Write your code here
  let canSell = 0;
  order.sort((a, b) => a - b);
  for (let i = 0; i < order.length; i++) {
    if (order[i] > k) {
      break;
    }
    if (k >= order[i]) {
      canSell++;
      k -= order[i];
    }
  }
  return canSell;
}

//another solution with 1 method
function filledOrders(order, k) {
  // Write your code here
  let canSell = 0;
  for (let i = 0; i < order.length; i++) {
    if (order[i] > k) {
      continue;
    }
    if (k >= order[i]) {
      canSell++;
      k -= order[i];
    }
  }
  return canSell;
}
