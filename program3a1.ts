class FixedDeposit {

    // 1. Properties (Fields)
    public customerName: string;
    public principalAmount: number;
    public interestRate: number; // Annual rate in %
    public tenureYears: number;

    // 2. Constructor Overloading

    // Signature 1: Default/Standard FD
    constructor(name: string, amount: number);

    // Signature 2: Custom FD
    constructor(name: string, amount: number, rate: number, years: number);

    // Implementation
    constructor(name: string, amount: number, rate?: number, years?: number) {
        this.customerName = name;
        this.principalAmount = amount;

        // Default values
        this.interestRate = rate ?? 6.5;
        this.tenureYears = years ?? 1;
    }

    // 3. Method to calculate maturity
    public calculateMaturity(): number {
        const interest =
            (this.principalAmount * this.interestRate * this.tenureYears) / 100;

        return this.principalAmount + interest;
    }

    // Display Details
    public displayDetails(): void {
        console.log("----- FD Receipt -----");
        console.log(`Customer: ${this.customerName}`);
        console.log(`Principal: ₹${this.principalAmount}`);
        console.log(`Rate: ${this.interestRate}%`);
        console.log(`Tenure: ${this.tenureYears} year(s)`);
        console.log(`Maturity Amount: ₹${this.calculateMaturity()}`);
        console.log("----------------------\n");
    }
}

// Scenario A
const standardFD = new FixedDeposit("Rajesh Kumar", 50000);

// Scenario B
const seniorCitizenFD = new FixedDeposit("Anjali Sharma", 100000, 7.5, 3);

// Display
standardFD.displayDetails();
seniorCitizenFD.displayDetails();

// Update property
seniorCitizenFD.principalAmount = 110000;

console.log(
    `Updated Maturity for Anjali: ₹${seniorCitizenFD.calculateMaturity()}`
);