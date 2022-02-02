function miniMaxSum(arr) {
  // Write your code here
  const yes = [...arr];
  yes.sort((a, b) => a - b);
  yes.pop();
  const min = yes.reduce((p, c) => p + c);
  const max = arr
    .sort((a, b) => a - b)
    .splice(1)
    .reduce((p, c) => p + c);

  console.log(min, max);
}

miniMaxSum([7, 69, 2, 221, 8974]);
