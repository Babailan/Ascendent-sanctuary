function birthdayCakeCandles(candles) {
  // Write your code here
  let tallCadle = 0;
  let n = 0;
  for (let i = 0; i < candles.length; i++) {
    if (candles[i] > n) {
      n = candles[i];
    }
  }
  for (let j = 0; j < candles.length; j++) {
    if (candles[j] === n) {
      tallCadle++;
    }
  }
  return tallCadle;
}
