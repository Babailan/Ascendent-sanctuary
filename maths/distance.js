// d = root(x2-x1)^2 + (y2-y1)^2

function distanceCalculator(pared1, paired2) {
  const x = Math.pow(paired2[0] - pared1[0], 2);
  const y = Math.pow(paired2[1] - pared1[1], 2);
  console.log(`NOT SQRT ${x + y}`);
  console.log(`SQRT ${Math.sqrt(x + y)}`);
}

distanceCalculator([2, 5], [6, 2]);
