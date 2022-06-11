function squares(a, b) {
  // Write your code here
  let e = 1;
  let n = 0;
  while (true) {
    const y = e ** 2;

    if (y > b && y > a) {
      return n;
    }
    if (y >= a && y <= b) {
      n++;
    }
    e++;
  }
}
console.log(squares(24, 49));
