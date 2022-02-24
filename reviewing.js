function climbingLeaderboard(ranked, player) {
  //later
  const rankOb = {};
  let rankedIdentifer = ranked[0];
  let count = 1;
  rankOb[rankedIdentifer] = 1;
  //turn to
  for (let i = 1; i < ranked.length; i++) {
    if (ranked[i] < rankedIdentifer) {
      count++;
      rankOb[ranked[i]] = count;
      rankedIdentifer = ranked[i];
    }
  }
  let rankedLength = ranked.length - 1;
  let playerScores = [];
  for (let i = 0; i < player.length; i++) {
    while (true) {
      if (
        player[i] > ranked[rankedLength] &&
        ranked[rankedLength - 1] !== undefined &&
        player[i] >= ranked[rankedLength - 1]
      ) {
        ranked.splice(rankedLength, 1);
        rankedLength--;
        continue;
      }
      console.log(player[i], ranked[rankedLength]);
      if (player[i] === ranked[rankedLength]) {
        playerScores.push(rankOb[ranked[rankedLength]]) - 1;
        break;
      }
      if (player[i] < ranked[rankedLength]) {
        let ans = rankOb[ranked[rankedLength]] + 1;
        playerScores.push(ans);
        break;
      }
      if (player[i] >= ranked[rankedLength]) {
        playerScores.push(rankOb[ranked[rankedLength]]);
        break;
      }
    }
  }
  return playerScores;
}
climbingLeaderboard([100, 90, 90, 80, 75, 60], [50, 65, 77, 90, 102]);
