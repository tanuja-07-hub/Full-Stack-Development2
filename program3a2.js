"use strict";
class Student {
    studentName;
    marks1;
    marks2;
    marks3;
    constructor(name, m1, m2, m3) {
        this.studentName = name;
        this.marks1 = m1 ?? 50;
        this.marks2 = m2 ?? 50;
        this.marks3 = m3 ?? 50;
    }
    calculateTotal() {
        return this.marks1 + this.marks2 + this.marks3;
    }
    displayDetails() {
        console.log("----- Student Report -----");
        console.log(`Student: ${this.studentName}`);
        console.log(`Marks1: ${this.marks1}`);
        console.log(`Marks2: ${this.marks2}`);
        console.log(`Marks3: ${this.marks3}`);
        console.log(`Total: ${this.calculateTotal()}`);
        console.log("--------------------------\n");
    }
}
const student1 = new Student("Ravi");
const student2 = new Student("Priya", 85, 90, 95);
student1.displayDetails();
student2.displayDetails();
student2.marks1 = 100;
console.log(`Updated Total: ${student2.calculateTotal()}`);
