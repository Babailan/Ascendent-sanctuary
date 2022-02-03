function migratoryBirds(arr) {
  // Write your code here
  let mostFrequently = {};
  let propertyHighest;
  //make object of array
  for (let i = 0; i < arr.length; i++) {
    let elemnent = arr[i];
    mostFrequently[elemnent] = mostFrequently[elemnent] + 1 || 1;
  }
  //check the highest frequently signed
  let highest;
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    const second = arr[i + 1];
    if (mostFrequently[second] > mostFrequently[element]) {
      highest = second;
    }
    if (mostFrequently[element] > mostFrequently[second]) {
      highest = element;
    }
  }
  // lowest
  let lowest = highest;
  for (let i = 0; i < arr.length; i++) {
    if (mostFrequently[highest] !== mostFrequently[arr[i]]) {
      if (mostFrequently[arr[i]] === mostFrequently[highest]) {
        for (let j = 0; j < arr.length; j++) {
          if (mostFrequently[arr[j]] < mostFrequently[lowest]) {
            lowest = arr[j];
          }
        }
        return lowest;
      }
    }
  }
  return highest;
}
