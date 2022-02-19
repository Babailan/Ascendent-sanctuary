function pickingNumbers(a) {
  let positives = 0;
  let negatives = 0;
  for (let i = 0; i < a.length; i++) {
    let counter = 1;
    for (let j = 0; j < a.length; j++) {
      if (i === j) {
        continue;
      }
      if (a[i] === a[j] || a[i] + 1 === a[j]) {
        counter++;
      }
      if (counter > positives) {
        positives = counter;
      }
    }
  }
  for (let i = 0; i < a.length; i++) {
    let counter = 1;
    for (let j = 0; j < a.length; j++) {
      if (i === j) {
        continue;
      }
      if (a[i] === a[j] || a[i] - 1 === a[j]) {
        counter++;
      }
      if (counter > negatives) {
        negatives = counter;
      }
    }
  }
  return positives | negatives;
}
