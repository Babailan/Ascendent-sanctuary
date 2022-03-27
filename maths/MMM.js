function Median(arr) {
  arr.sort((a, b) => a - b);
  if (arr.length % 2 === 0) {
    return (arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2;
  } else {
    return arr[(arr.length - 1) / 2];
  }
}
function Mean(arr) {
  arr.sort((a, b) => a - b);
  let y = arr.reduce((p, c) => p + c);
  return y / arr.length;
}
function Mode(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = obj[arr[i]] + 1 || 1;
  }
  return obj;
}
console.log(Mean([44, 37, 12, 36, 31, 27, , 31, 41, 45, 33, 45, 42, 18, 37]));
