// placeholder presentation
"use strict";

function calculateArraySum(inputArray) {
    if (!Array.isArray(inputArray)) {
            throw new TypeError("Funktionen mottar bara datatyp: array");
        }
    let sum;
        
    for (let value of inputArray) {
        sum += value;
    }
    
    return sum;

}
