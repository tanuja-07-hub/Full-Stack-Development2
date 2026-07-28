//======================================================
// Program: Count the Frequency of Characters in a String
//======================================================

let str: string = "typescript";
let frequenc: Map<string, number> = new Map();

for (let ch of str) {
    if (frequenc.has(ch)) {
        frequenc.set(ch, frequenc.get(ch)! + 1);
    } else {
        frequenc.set(ch, 1);
    }
}

console.log("Character Frequencies:");

frequenc.forEach((value, key) => {
    console.log(key + " : " + value);
});