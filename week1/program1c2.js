"use strict";
// 1. Variable Annotations with Cricket Team Data
let teamName = "India";
let worldCups = 2;
let isChampion = true;
// 2. Function Parameter and Return Type Annotations
function getTeamInfo(name, cups) {
    return `${name} has won ${cups} Cricket World Cups.`;
}
// 3. Array Annotations
let players = [
    "Virat Kohli",
    "Rohit Sharma",
    "Jasprit Bumrah",
    "Hardik Pandya"
];
// 4. Using the annotated variables and functions
const summary = getTeamInfo(teamName, worldCups);
console.log(summary);
console.log(`Players: ${players.join(", ")}`);
console.log(`Is the team a champion? ${isChampion ? "Yes" : "No"}`);
/*
TYPE SAFETY CHECK:
teamName = 123; // Error: Type 'number' is not assignable to type 'string'.
*/ 
