function sockMerchant(n, ar) {
  // Write your code here
  let socks = {};
  let pairs = 0;
  for (let i = 0; i < n; i++) {
    socks[ar[i]] = socks[ar[i]] + 1 || 1;
  }
  for (const property in socks) {
    if (socks[property] === 0 || socks[property] === 1) {
      continue;
    }
    if (socks[property] % 3 === 0) {
      let numOfPairs = (socks[property] - 1) / 2;
      pairs += numOfPairs;
    } else {
      let numOfPairs = socks[property] / 2;
      pairs += numOfPairs;
    }
  }
  return parseInt(pairs);
}

sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);
