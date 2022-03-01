function circularArrayRotation(a, k, queries) {
  let arr = new Array(a.length);

  for (let i = 0; i < a.length; i++) {
    arr[(i + k) % a.length] = a[i];
  }

  let r = [];
  for (let j of queries) {
    r.push(arr[j]);
  }

  return r;
}
