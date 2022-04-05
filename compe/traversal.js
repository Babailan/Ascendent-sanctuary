function traversal(string, subString) {
  let original = string.split("");
  string = string.split("");
  let arrays = [];
  for (let i = 0; i < string.length; i++) {
    arrays.push(string.slice(i, subString.length + i).join(""));
    string = original;
  }
  console.log(arrays);
}
traversal("ABCDCDC", "CDC");
