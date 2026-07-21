class Employee {

    public empName: string;
    public basicSalary: number;
    public hra: number;
    public bonus: number;

    constructor(name: string, salary: number);
    constructor(name: string, salary: number, hra: number, bonus: number);

    constructor(name: string, salary: number, hra?: number, bonus?: number) {
        this.empName = name;
        this.basicSalary = salary;
        this.hra = hra ?? 5000;
        this.bonus = bonus ?? 2000;
    }

    public calculateSalary(): number {
        return this.basicSalary + this.hra + this.bonus;
    }

    public displayDetails(): void {
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