//======================================================
// Program: Find the Sum of Digits of a Number
//======================================================

let num3: number = 12345;
let sum3: number = 0;

while (num3 > 0) {
    sum3 += num3 % 10;
    num3 = Math.floor(num3 / 10);
}

console.log("Sum of Digits =", sum3);