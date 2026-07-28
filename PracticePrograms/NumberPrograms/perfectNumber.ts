//======================================================
// Program: Check Perfect Number
//======================================================

let num1: number = 28;
let sum1: number = 0;

for (let i = 1; i < num1; i++) {
    if (num1 % i === 0) {
        sum1 += i;
    }
}

if (sum1 === num1) {
    console.log(num1 + " is a Perfect Number");
} else {
    console.log(num1 + " is not a Perfect Number");
}