// 1. Variable Annotations with Cricket Team Data

let teamName: string = "India";
let worldCups: number = 2;
let isChampion: boolean = true;

// 2. Function Parameter and Return Type Annotations

function getTeamInfo(name: string, cups: number): string {
    return `${name} has won ${cups} Cricket World Cups.`;
}

// 3. Array Annotations

let players: string[] = [
    "Virat Kohli",
    "Rohit Sharma",
    "Jasprit Bumrah",
    "Hardik Pandya"
];

// 4. Using the annotated variables and functions

const summay: string = getTeamInfo(teamName, worldCups);

console.log(summay);
console.log(`Players: ${players.join(", ")}`);
console.log(`Is the team a champion? ${isChampion ? "Yes" : "No"}`);

/*
TYPE SAFETY CHECK:
teamName = 123; // Error: Type 'number' is not assignable to type 'string'.
*/