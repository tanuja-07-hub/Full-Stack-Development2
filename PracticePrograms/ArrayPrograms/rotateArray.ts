//======================================================
// Program: Rotate an Array by N Positions
//======================================================

let ar: number[] = [1, 2, 3, 4, 5];
let n1: number = 2;

let rotated = [...ar.slice(n1), ...ar.slice(0, n1)];

console.log("Rotated Array:", rotated);