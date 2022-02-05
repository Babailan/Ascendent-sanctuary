function pageCount(n, p) {
  // Write your code here
  let startingTurn = 0;
  let currentpage = 1;
  //starting from page 1
  for (let i = 0; i < n; i++) {
    if (currentpage === p || currentpage - 1 === p) {
      break;
    } else {
      currentpage += 2;
      startingTurn++;
    }
    if (currentpage === p || currentpage - 1 === p) {
      break;
    }
  }
  //starting from back of the page
  let backTurn = 0;
  let backcurrenPage = n;
  for (let i = n; i > 0; i--) {
    if (backcurrenPage % 2 !== 0) {
      if (backcurrenPage === p || backcurrenPage - 1 === p) {
        break;
      } else {
        backTurn++;
        backcurrenPage -= 2;
      }
    } else {
      backcurrenPage++;
    }
  }

  if (startingTurn > backTurn) {
    return backTurn;
  } else if (backTurn > startingTurn) {
    return startingTurn;
  } else {
    return backTurn;
  }
}

console.log(pageCount(5, 4));
