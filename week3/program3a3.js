"use strict";
class Employee {
    empName;
    basicSalary;
    hra;
    bonus;
    constructor(name, salary, hra, bonus) {
        this.empName = name;
        this.basicSalary = salary;
        this.hra = hra ?? 5000;
        this.bonus = bonus ?? 2000;
    }
    calculateSalary() {
        return this.basicSalary + this.hra + this.bonus;
    }
    displayDetails() {
        console.log("----- Employee Details -----");
        console.log(`Employee: ${this.empName}`);
        console.log(`Basic Salary: ₹${this.basicSalary}`);
        console.log(`HRA: ₹${this.hra}`);
        console.log(`Bonus: ₹${this.bonus}`);
        console.log(`Total Salary: ₹${this.calculateSalary()}`);
        console.log("----------------------------\n");
    }
}
const emp1 = new Employee("Rahul", 30000);
const emp2 = new Employee("Sneha", 45000, 8000, 5000);
emp1.displayDetails();
emp2.displayDetails();
emp2.basicSalary = 50000;
console.log(`Updated Salary: ₹${emp2.calculateSalary()}`);
