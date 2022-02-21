function hurdleRace(k, height) {
  // Write your code here
  let highest = 0;
  for (let i = 0; i < height.length; i++) {
    if (height[i] > highest) {
      highest = height[i];
    }
  }
  if (highest - k <= 0) {
    return 0;
  }
  if (highest - k > 1) {
    return highest - k;
  }
}
console.log(hurdleRace(4, [1, 6, 3, 5, 2]));
