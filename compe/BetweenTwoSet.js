function getTotalX(a, b) {
  // Write your code here
  const array = [];
  const answer = [];
  b = b.sort((a, b) => a - b);
  a = a.sort((a, b) => a - b);
  let checker = true;
  // get the list all common mult
  for (let i = 1; i <= b[0]; i++) {
    for (let j = 0; j < a.length; j++) {
      if (i % a[j] === 0 && i <= b[0]) {
        checker = true;
      } else {
        checker = false;
        break;
      }
    }
    if (checker) {
      array.push(i);
    }
  }
  //find factor of 2nd array
  let n2Checker = true;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (b[j] % array[i] === 0) {
        n2Checker = true;
        continue;
      } else {
        n2Checker = false;
        break;
      }
    }
    if (n2Checker) {
      answer.push(array[i]);
    } else {
      n2Checker = true;
    }
  }
  return answer.length;
}
//solve 5 hours duration
