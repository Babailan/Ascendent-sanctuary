"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'stdDev' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function stdDev(arr) {
  // Print your answers to 1 decimal place within this function
  let u = arr.reduce((p, c) => p + c) / arr.length;
  let std = 0;
  for (let i = 0; i < arr.length; i++) {
    std += (arr[i] - u) ** 2;
  }
  console.log(Math.sqrt(std / arr.length).toFixed(1));
}
// test Cases
// #1
// console.log(
//   stdDev([
//     33664, 35702, 7049, 74334, 5725, 12090, 62774, 1149, 81848, 84123, 17698,
//     42269, 42457, 80934, 83409, 19075, 87353, 63407, 20669, 36812, 44473, 46723,
//     41091, 54903, 1749, 88514, 65760, 47322, 17365, 24779, 20301, 97839, 69612,
//     13975, 89694, 14585, 37259, 38361, 13720, 18729, 8283, 3886, 26681, 8005,
//     48460, 13101, 52287, 44583, 878, 16133, 6334, 21592, 87253, 34537, 10974,
//     87484, 36937, 79336, 78434, 76977, 75040, 77796, 62173, 63217, 68712, 60934,
//     88017, 3811, 41145, 57471, 6887, 74612, 78798, 7308, 88094, 43245, 57157,
//     86406, 2922, 42919, 74375, 40076, 26030, 65306, 94610, 11923, 90367, 5603,
//     52189, 45765, 44982, 27234, 77150, 75570, 40800, 22550, 64134, 4029, 13841,
//     91097,
//   ])
// );
function main() {
  const n = parseInt(readLine().trim(), 10);

  const vals = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((valsTemp) => parseInt(valsTemp, 10));

  stdDev(vals);
}
