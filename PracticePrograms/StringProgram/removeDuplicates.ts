//======================================================
// Program: Remove Duplicate Characters from a String
//======================================================

let str1: string = "programming";
let result: string = "";

for (let ch of str1) {
    if (!result.includes(ch)) {
        result += ch;
    }
}

console.log("Original String :", str1);
console.log("After Removing Duplicates :", result);