function designerPdfViewer(h, word) {
  // Write your code here
  let alphabhet = "abcdefghijklmnopqrstuvwxyz";
  let tallest = 0;

  for (let i = 0; i < word.length; i++) {
    for (let j = 0; j < h.length; j++) {
      if (word[i] === alphabhet[j]) {
        if (h[j] > tallest) {
          tallest = h[j];
        }
      }
    }
  }
  console.log(tallest * word.length);
  return tallest * word.length;
}
designerPdfViewer(
  [
    1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
    7,
  ],
  "pneumonoultramicroscopicsilicovolcanoconiosis"
);
