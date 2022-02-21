function decryptPassword(s) {
  // Write your code here
  s = s.split("");
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === "*") {
      let h = s[i - 1];
      let l = s[i - 2];
      s[i - 1] = l;
      s[i - 2] = h;
      s.splice(i, 1);
      i--;
    }
    if (!isNaN(s[i])) {
      let indexf = s[0];
      s[i] = indexf;
      s.splice(0, 1);
      i--;
    }
  }
  return s.join("");
}
