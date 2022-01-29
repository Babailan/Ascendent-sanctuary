function staircase(n) {
  let num = n - 1;
  for (let i = 0; i < n; i++) {
    let steps = "";
    for (let j = 0; j < n; j++) {
      if (j >= num) {
        steps += "#";
      } else {
        steps += " ";
      }
    }
    num--;
    console.log();
  }
}
staircase(6);
// n=1
// i =1
// j =0
// steps
// if(j >= num) add #
// else  add space
// after finishing j loop minus num--
//      #
//     ##
//    ###
//   ####
//  #####
// ######
