// 1. Variable Annotations with Student Data

let studentName: string = "Rahul";
let studentAge: number = 20;
let hasPassed: boolean = true;

// 2. Function Parameter and Return Type Annotations

function getStudentInfo(name: string, age: number): string {
    return `${name} is ${age} years old.`;
}

// 3. Array Annotations

let subjects: string[] = [
    "Mathematics",
    "Physics",
    "Computer Science",
    "English"
];

// 4. Using the annotated variables and functions

const summar: string = getStudentInfo(studentName, studentAge);

console.log(summar);
console.log(`Subjects: ${subjects.join(", ")}`);
console.log(`Has Passed? ${hasPassed ? "Yes" : "No"}`);

/*
TYPE SAFETY CHECK:
studentAge = "Twenty"; // Error: Type 'string' is not assignable to type 'number'.
*/