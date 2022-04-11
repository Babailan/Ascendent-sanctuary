function processData(input) {
    //Enter your code here
    let mean = 0;
    input = input.split(" ");
    let n = input.splice(0,1)[0].split("\n")[1];
    input.unshift(n);
    input = input.sort((a,b)=> a-b);
    let length = parseInt(input.slice(input));
    for(let i=0;i < input.length;i++) {
        mean += parseInt(input[i])
    }
    console.log(mean / input.length);
    
    if(input.length % 2===0) {
        let left = parseInt(input[(input.length/2)-1]);
        let right = parseInt(input[(input.length/2)]);
        console.log((right+left) / 2)
    }else {
        console.log(input[Math.round(input.length/2)])
    }
    
    let ob = {};
    
    for(let i = 0 ; i < input.length;i++) {
        ob[input[i]] = ob[input[i]]+1 || 1
    }
    
    let highestNum = 1;
    let tracker;
    for(const properties in ob) {
        if(ob[properties] > highestNum) {
            tracker = parseInt(properties);
            highestNum = parseInt(ob[properties]);
        }
    }
    if(tracker) {
        console.log(parseInt(tracker))
    }else {
        console.log(parseInt(input[0]))
    }
} 
