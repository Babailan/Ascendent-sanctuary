function countingValleys(steps, path) {
  // Write your code here
  let valley = 0;
  let currentSteps = 0;
  for (let i = 0; i < steps; i++) {
    if (path[i] === "U") {
      currentSteps++;
      if (currentSteps === 0) {
        valley += 1;
      }
    } else {
      currentSteps--;
    }
  }
  return valley;
}
