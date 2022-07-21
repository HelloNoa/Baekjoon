let fs = require('fs');
const [input1, input2] = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

let num1 = Number(input1);
let num2 = Number(input2);
let result = 0;
(num2+'').split('').reverse().forEach((e,idx)=>{
    console.log(num1 * e);
    let mul=1;
    for(let i=0; i < idx; i++) {
        mul*=10;
    }
    result += (num1*e*mul);
});
console.log(num1*num2);
