// the first three argument is the day that book is return. and the last three argument is due date.

function libraryFine(d1: number, m1: number, y1: number, d2: number, m2: number, y2: number): number {
  // Write your code here
  if (y1 > y2) {
    return 10000;
  } else {
    if (y1 < y2) {
      return 0;
    }
    if (m1 > m2) {
      return (m1 - m2) * 500;
    } else {
      if (m1 < m2) {
        return 0;
      }
      if (d1 > d2) {
        return (d1 - d2) * 15;
      } else {
        return 0;
      }
    }
  }
}

const x = libraryFine(9, 6, 2015, 6, 6, 2015)
console.log(x)
