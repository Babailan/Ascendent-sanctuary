function bonAppetit(bill, k, b) {
  // Write your code here
  //k is 0 based index
  months.splice(k, 1);
  let annaBill = 0; //14
  for (let i = 0; i < bill.length; i++) {
    annaBill += bill[i];
  }
  annaBill /= 2;
  if (b <= annaBill) {
    console.log("Bon Appetit");
  } else {
    console.log(b - annaBill);
  }
}
