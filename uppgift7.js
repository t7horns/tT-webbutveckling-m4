// placeholder presentation
"use strict";

function calculateArraySum(inputArray) {
    if (!Array.isArray(inputArray)) {
            throw new TypeError("Funktionen mottar bara datatyp: array");
        }
    let sum = 0;                    // Startvärde på number behövs, annars misslyckas uträkning (undefined + int)
        
    for (let value of inputArray) {
        sum += value;               // För varje värde i arrayen summeras värdet
    }
    
    return sum;

}

// Skapa två olika för att testa funktionen
let pointList = [
    2,
    3,
    5
];

let ageList = [
    5,
    5,
    11
];

console.log("Summa för poänglista: " + calculateArraySum(pointList));
console.log("\nSumma för ålderslista: " + calculateArraySum(ageList));