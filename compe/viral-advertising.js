function viralAdvertising(n) {
  // Write your code here
  let f = 0;
  let liked = 2;
  for (let i = 0; i < n; i++) {
    f += liked;
    liked = Math.floor((liked * 3) / 2);
  }
  return f;
}
