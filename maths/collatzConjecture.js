function collatzConjecture(n) {
  n = parseInt(n);
  let a = [n];
  while (true) {
    if (n % 2 === 0) {
      n /= 2;
    } else {
      n = n * 3 + 1;
    }
    a.push(n);
    if (n === 1) {
      return a;
    }
  }
}

// The conjecture asks whether repeating two simple arithmetic operations will eventually transform every positive integer into 1.

console.log(collatzConjecture(15));
