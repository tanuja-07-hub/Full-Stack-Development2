//======================================================
// Program: Check Strong Number
//======================================================

let num2: number = 145;
let original1: number = num;
let sum2: number = 0;

while (num2 > 0) {
    let digit = num2 % 10;
    let fact = 1;

    for (let i = 1; i <= digit; i++) {
        fact *= i;
    }

    sum2 += fact;
    num2 = Math.floor(num2 / 10);
}

if (sum2 === original1) {
    console.log(original1 + " is a Strong Number");
} else {
    console.log(original1 + " is not a Strong Number");
}