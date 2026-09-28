// Print a sequence of numbers, then conditionally print only even numbers.
"use strict";


console.log("First print numbers 1-20:")
let number = 1

for (number; number <= 20; number++) {
    console.log(number)
    if (number == 20){ // When max value is reached, reset number variable to prepare for other for-loops starting from number == 1
        number = 1;
        break;
    }
}

console.log("Then print only even numbers")