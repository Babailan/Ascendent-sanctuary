function jumpingOnClouds(c, k) {
  let e = 100;
  let start = 0;
  while (true) {
    if (start >= c.length && start % c.length === 0) {
      break;
    }
    if (c[start % c.length] === 1) {
      e -= 3;
      start += k;
      continue;
    }
    start += k;
    e--;
  }
  return e;
}
