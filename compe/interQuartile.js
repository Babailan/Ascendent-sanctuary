
function interQuartile(values, freqs) {
    // Print your answer to 1 decimal place within this function
    let s = new Array()
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < freqs[i]; j++) {
            s.push(values[i])
        }
    }
    s = s.sort((a, b) => a - b);
    let q1, q3,iQuartile;
    let median = Math.floor(s.length / 2);
    q1 = s.slice(0,median)
    q3 = s.slice(median,s.length)
    if(q1.length % 2 === 0) {
        let l = q1.length / 2
        q1 = (q1[l -1] + q1[l]) / 2;
        q3 = (q3[l -1] + q3[l]) / 2;
        iQuartile = q3 - q1;
    }else{
        let l = Math.round(q1.length/2)
        q1 = q1[l]
        q3 = q3[l]
        iQuartile = q3 - q1;
     }
    console.log(iQuartile.toFixed(1))
}
interQuartile([6, 12, 8, 10, 20, 16], [5, 4, 3, 2, 1, 5])

