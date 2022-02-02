function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code here
  let appleCount = 0;
  let orageCount = 0;
  for (let i = 0; i < apples.length; i++) {
    const y = apples[i] + a;
    if (y >= s && y <= t) {
      appleCount++;
    }
  }
  for (let i = 0; i < oranges.length; i++) {
    const y = oranges[i] + b;
    if (y >= s && y <= t) {
      orageCount++;
    }
  }
  console.log(`${appleCount}\n${orageCount}`);
}

//s is integer = start point of the house it's a x-axis
//t is integer = end point of the house it's a x-axis also
//a is integer = apples location
//b is integer = orange location
//apples is array of integer = list of apples locations
//oranges is array of integer = list of oranges locations
