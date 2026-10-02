// This script print a sequence of numbers, then conditionally print only even numbers.
// By Mathias Thorgren, 2026
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


for (number; number <= 20; number++) {
    if (number % 2 == 1) { // If the number has modulo when divided by two, it is not an even number.
     continue;             // Therefore, continue to next loop
    }
    
    console.log(number)     // Therefore we can ensure only even numbers get printed.
    
    if (number == 20){
        number = 1;
        break;
    }
}