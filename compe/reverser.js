function reverserInt(int) {
  let newNum = [];
  let splitted = int.split("");
  for (let i = splitted.length - 1; i >= 0; i--) {
    newNum.push(splitted[i]);
  }
  return parseInt(newNum.join(""));
}

function reverserString(strings) {
  //replace string with this int but it's really string
  let newNum = [];
  let splitted = int.split("");
  for (let i = splitted.length - 1; i >= 0; i--) {
    newNum.push(splitted[i]);
  }
  return newNum.join("");
}
