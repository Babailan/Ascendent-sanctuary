//example input
const input = [
  [11, 2, 4, 2],
  [4, 5, 6, 5],
  [10, 8, -12, 5],
  [10, 8, -12, 3],
];

function diagonalDifference(arr) {
  let lr = 0;
  let rl = 0;
  let k = arr[0].length - 1;
  for (let i = 0; i < arr.length; i++) {
    lr += arr[i][i];
  }
  for (let i = 0; i < arr.length; i++) {
    rl += arr[i][k];
    k--;
  }
  return Math.abs(lr - rl);
}
diagonalDifference(input);
