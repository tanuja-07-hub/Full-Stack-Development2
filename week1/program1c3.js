"use strict";
// 1. Variable Annotations with Student Data
let studentName = "Rahul";
let studentAge = 20;
let hasPassed = true;
// 2. Function Parameter and Return Type Annotations
function getStudentInfo(name, age) {
    return `${name} is ${age} years old.`;
}
// 3. Array Annotations
let subjects = [
    "Mathematics",
    "Physics",
    "Computer Science",
    "English"
];
// 4. Using the annotated variables and functions
const summary = getStudentInfo(studentName, studentAge);
console.log(summary);
console.log(`Subjects: ${subjects.join(", ")}`);
console.log(`Has Passed? ${hasPassed ? "Yes" : "No"}`);
/*
TYPE SAFETY CHECK:
studentAge = "Twenty"; // Error: Type 'string' is not assignable to type 'number'.
*/ 
