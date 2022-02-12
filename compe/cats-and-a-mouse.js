function catAndMouse(x, y, z) {
  let cx, cy;
  if (x > z) {
    cx = x - z;
  } else {
    cx = z - x;
  }
  if (y > z) {
    cy = y - z;
  } else {
    cy = z - y;
  }
  if (x === y && y === z) {
    return "Mouse C";
  }
  console.log(cx, cy);
  if (cx < cy) {
    return "Cat A";
  } else if (cy < cx) {
    return "Cat B";
  } else {
    return "Mouse C";
  }
}
console.log(catAndMouse(1, 3, 2));
console.log(catAndMouse(1, 2, 3));
