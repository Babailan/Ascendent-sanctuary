function getMoneySpent(keyboards, drives, b) {
  /*
   * Write your code here.
   */
  let highestCost = 0;
  for (let i = 0; i < keyboards.length; i++) {
    for (let j = 0; j < drives.length; j++) {
      if (keyboards[i] + drives[j] > highestCost) {
        if (keyboards[i] + drives[j] > b) {
          continue;
        } else {
          highestCost = keyboards[i] + drives[j];
        }
      }
    }
  }
  if (highestCost === 0) {
    highestCost = -1;
  }
  return highestCost;
}
