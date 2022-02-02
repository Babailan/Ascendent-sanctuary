function breakingRecords(scores) {
  // Write your code here
  // Write your code here
  let highestRecord = scores[0];
  let hrc = 0;
  //break her record
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] > highestRecord) {
      hrc++;
      highestRecord = scores[i];
    }
  }
  //break her record
  let lrc = 0;
  let lowestscore = scores[0];
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] < lowestscore) {
      lrc++;
      lowestscore = scores[i];
    }
  }
  return [hrc, lrc];
}
