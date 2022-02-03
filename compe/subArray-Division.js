function birthday(s, d, m) {
  // Write your code here
  let count = 0;
  if (m === 1) {
    for (let i = 0; i < s.length; i++) {
      if (s[i] === d) {
        count++;
      }
    }
  } else {
    for (let i = 0; i < s.length; i++) {
      let sliced = s.slice(i, i + m);
      let answer = 0;
      for (let j = 0; j < sliced.length; j++) {
        answer += sliced[j];
      }
      if (answer === d) {
        count++;
      }
    }
  }
  return count;
}
// birthday([5, 1, 2, 4, 4, 2, 4, 2, 2, 5, 1, 4, 3, 1, 1, 1, 2, 1, 4, 1], 18, 6);
// expected output = 4;
