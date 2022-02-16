function formingMagicSquare(s) {
  let min_cost = 45;
  var all_squares = [
    [
      [8, 1, 6],
      [3, 5, 7],
      [4, 9, 2],
    ],
    [
      [6, 1, 8],
      [7, 5, 3],
      [2, 9, 4],
    ],
    [
      [4, 9, 2],
      [3, 5, 7],
      [8, 1, 6],
    ],
    [
      [2, 9, 4],
      [7, 5, 3],
      [6, 1, 8],
    ],
    [
      [8, 3, 4],
      [1, 5, 9],
      [6, 7, 2],
    ],
    [
      [4, 3, 8],
      [9, 5, 1],
      [2, 7, 6],
    ],
    [
      [6, 7, 2],
      [1, 5, 9],
      [8, 3, 4],
    ],
    [
      [2, 7, 6],
      [9, 5, 1],
      [4, 3, 8],
    ],
  ];

  for (let i = 0; i < all_squares.length; i++) {
    let cost = 0;
    for (let j = 0; j < s.length; j++) {
      for (let k = 0; k < s[j].length; k++) {
        let ele = Math.abs(all_squares[i][j][k] - s[j][k]);
        cost += ele;
      }
    }
    if (min_cost > cost) {
      min_cost = cost;
    }
  }
  return min_cost;
}
