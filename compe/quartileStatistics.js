"use strict";

const fs = require("fs");

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
 * Complete the 'quartiles' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function quartiles(arr) {
  arr = arr.sort((a, b) => a - b);
  let q = [];
  // Write your code here
  let q1, q2, q3;
  console.log(arr.length);
  if (arr.length % 2 === 0) {
    const rounded = Math.round(arr.length / 2);
    q1 = arr.slice(0, rounded);
    q2 = (arr[rounded - 1] + arr[rounded]) / 2;
    q3 = arr.slice(rounded, arr.length);
    //get their medians
    // if()
    let lr = Math.floor(q1.length / 2);
    if (q1.length % 2 === 0) {
      q1 = (q1[lr] + q1[lr - 1]) / 2;
      q3 = (q3[lr] + q3[lr - 1]) / 2;
    } else {
      q1 = q1[lr];
      q3 = q3[lr];
    }
  } else {
    const rounded = Math.floor(arr.length / 2);
    q1 = arr.slice(0, rounded);
    q2 = arr[rounded];
    q3 = arr.slice(rounded + 1, arr.length);
    let lr = Math.round(q1.length / 2);
    q3 = (q3[lr] + q3[lr - 1]) / 2;
    q1 = (q1[lr] + q1[lr - 1]) / 2;
  }
  q.push(q1, q2, q3);

  return q;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  const data = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((dataTemp) => parseInt(dataTemp, 10));

  const res = quartiles(data);

  ws.write(res.join("\n") + "\n");

  ws.end();
}
