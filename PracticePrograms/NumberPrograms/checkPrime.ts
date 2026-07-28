//======================================================
// Program: Check Prime Number
//======================================================

let nu: number = 29;
let isPrime: boolean = true;

if (nu <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i <= Math.sqrt(nu); i++) {
        if (nu % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    console.log(nu + " is a Prime Number");
} else {
    console.log(nu + " is not a Prime Number");
}