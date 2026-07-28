//======================================================
// Program: Find the Missing Number in an Array
//======================================================

let arra: number[] = [1, 2, 3, 5];
let n: number = 5;

let expectedSum = (n * (n + 1)) / 2;
let actualSum = arra.reduce((sum, value) => sum + value, 0);

console.log("Missing Number:", expectedSum - actualSum);