function plusMinus(arr) {
    // Write your code here
	const arrayOfLength = arr.length;
	let p=0;
	let n = 0;
	let un = 0;
	for(let i=0;i < arrayOfLength;i++) {
		if(arr[i] === 0) {
			un++
		}
		if(arr[i] > 0 ) {
			p++
		}
		if(arr[i] < 0 ) {
			n++
		}
	}
	p = p / arrayOfLength;
	n = n / arrayOfLength;
	un = un / arrayOfLength;
	p = p.toPrecision(5);
	n = n.toPrecision(5);
	un = un.toPrecision(5);
	console.log(p);
	console.log(n);
	console.log(un);
}

