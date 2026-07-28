//======================================================
// Program: Find the Second Largest Number in an Array
//======================================================

let A: number[] = [10, 25, 40, 15, 35];

A.sort((a, b) => b - a);

console.log("Second Largest Element:", A[1]);