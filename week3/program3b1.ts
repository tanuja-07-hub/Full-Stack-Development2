class DigitalWallet {
    public holderName: string;
    private balance: number;
    private secretPin: number;
    protected loyaltyPoints: number = 0;

    constructor(name: string, initialDeposit: number, pin: number) {
        this.holderName = name;
        this.balance = initialDeposit;
        this.secretPin = pin;
    }

    // PUBLIC METHOD: The gateway to interact with private data
    public withdrawMoney(amount: number, enteredPin: number): void {
        if (this.verifyPin(enteredPin)) {
            if (this.balance >= amount) {
                this.balance -= amount;
                console.log(`₹${amount} withdrawn successfully. Remaining: ₹${this.balance}`);
            } else {
                console.log("Inadequate funds in your wallet!");
            }
        } else {
            console.log("Incorrect PIN. Transaction declined.");
        }
    }

    // PRIVATE METHOD: Internal logic used only by the class itself
    private verifyPin(pin: number): boolean {
        return this.secretPin === pin;
    }
}

// Inheritance to demonstrate PROTECTED
class PremiumWallet extends DigitalWallet {

    public addBonus(): void {

        // We can access loyaltyPoints because it's PROTECTED
        this.loyaltyPoints += 100;
        console.log(`Bonus added! Total points: ${this.loyaltyPoints}`);

        // ERROR: Property 'balance' is private and only accessible within class 'DigitalWallet'
        // this.balance += 500;
    }
}

// --- Execution ---

const myWallet = new DigitalWallet("Arjun Varma", 5000, 1234);

// 1. Accessing PUBLIC properties
console.log(`Welcome, ${myWallet.holderName}`); 
myWallet.withdrawMoney(1000, 1234);   // Success! Internal logic handles the private data.