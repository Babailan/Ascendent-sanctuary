//x1 +x2 / 2  , y1 +y2 / 2

function midpoint(order1, order2) {
  const x = (order1[0] + order2[0]) / 2;
  const y = (order1[1] + order2[1]) / 2;

  console.log(`answer : ${x},${y}`);
}
midpoint([-4, 9], [7, 6]);
