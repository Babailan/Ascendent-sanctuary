function formingMagicSquare(s) {
  // Write your code here
  let una = s[0][0] + s[0][1] + s[0][2];
  let dalawa = s[1][0] + s[1][1] + s[1][2];
  let tatlo = s[2][0] + s[2][1] + s[2][2];
  let dia = s[0][0] + s[1][1] + s[2][2];
  let opdia = s[0][2] + s[1][1] + s[2][0];
  let huUna = s[0][0] + s[1][0] + s[2][0];
  let huDa = s[0][1] + s[1][1] + s[2][1];
  let huli = s[2][2] + s[1][2] + s[0][2];

  let num = [];
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < s[i].length; j++) {
      num.push(s[i][j]);
    }
  }

  let no = [];
  let answers = [];
  for (let i = 1; i <= 9; i++) {
    if (!num.includes(i)) {
      no.push(i);
    }
  }

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < s[i].length; j++) {
      for (let k = 0; k < no.length; k++) {
        if (j === 0) {
          let previous = una;
          if (una === 15) {
            break;
          } else {
            if (una > s[i][j]) {
              una = una - s[i][j];
            } else {
              una = s[i][j] - una;
            }
            una += no[k];
            if (una === 15) {
              no.push(s[i][j]);
            } else {
              una = previous;
            }
          }
        }
        if (j === 1) {
          let previous = una;
          if (dalawa === 15) {
            break;
          } else {
            if (dalawa > s[i][j]) {
              dalawa = dalawa - s[i][j];
            } else {
              dalawa = s[i][j] - dalawa;
            }
            dalawa += no[k];
            if (dalawa === 15) {
              no.push(s[i][j]);
            } else {
              dalawa = previous;
            }
          }
        }
        if (j === 2) {
          let previous = una;
          if (dalawa === 15) {
            break;
          } else {
            if (tatlo > s[i][j]) {
              tatlo = tatlo - s[i][j];
            } else {
              tatlo = s[i][j] - dalawa;
            }
            tatlo += no[k];
            if (tatlo === 15) {
              no.push(s[i][j]);
            } else {
              tatlo === previous;
            }
          }
        }
      }
    }
  }
  //final steps after i got all possible values
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < s[i].length; j++) {
      for (let k = 0; k < no.length; k++) {
        const element = no[k];
        const previous = s[i][j];
        //0
        if (j === 0 && i === 0) {
          let a = s[i][1] + s[i][2] + element;
          if (a === 15) {
            s[i][j] = element;
            if (element + s[1][0] + s[2][0] === 15) {
              if (element > previous) {
                answers.push(element - previous);
              } else {
                answers.push(previous - element);
              }
            } else {
              s[i][j] = element;
            }
          }
        }
        if (j === 1 && i === 0) {
          //
          let a = s[i][0] + s[i][2] + element;
          if (a === 15) {
            s[i][j] = element;
            if (element + s[1][1] + s[2][1] === 15) {
              if (element > previous) {
                answers.push(element - previous);
              } else {
                answers.push(previous - element);
              }
            } else {
              s[i][j] = previous;
            }
          }
        }
        if (j === 2 && i === 0) {
          let a = s[i][0] + s[i][1] + element;
          if (a === 15) {
            s[i][j] = element;
            if (element + s[1][0] + s[2][0] === 15) {
              if (element > previous) {
                answers.push(element - previous);
              } else {
                answers.push(previous - element);
              }
            } else {
              s[i][j] = previous;
            }
          }
        }
        //1
        if (j === 0 && i === 1) {
          let a = s[i][1] + s[i][2] + element;
          let b = s[0][0] + s[2][0] + element;
          console.log(a, b, element);
          if (a === 15 && b === 15) {
            s[i][j] = element;
            if (element > previous) {
              answers.push(element - previous);
            } else {
              answers.push(previous - element);
            }
          }
        }
        if (j === 1 && i === 1) {
          //
          let a = s[i][0] + s[i][2] + element;
          if (a === 15) {
            s[i][j] = element;
            if (element + s[1][1] + s[2][1] === 15) {
              if (element > previous) {
                answers.push(element - previous);
              } else {
                answers.push(previous - element);
              }
            } else {
              s[i][j] = previous;
            }
          }
        }
        if (j === 2 && i === 1) {
          let a = s[i][0] + s[i][1] + element;
          if (a === 15) {
            s[i][j] = element;
            if (element + s[1][0] + s[2][0] === 15) {
              if (element > previous) {
                answers.push(element - previous);
              } else {
                answers.push(previous - element);
              }
            } else {
              s[i][j] = previous;
            }
          }
        }
      }
    }
  }
}
formingMagicSquare([
  [4, 8, 2],
  [4, 5, 7],
  [6, 1, 6],
]);
