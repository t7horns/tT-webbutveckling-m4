// This script creates numeric lists, calculates and present their sums, and checks validity
// By Mathias Thorgren, 2026
"use strict";

function calculateArraySum(inputArray) {
    if (!Array.isArray(inputArray)) {
            throw new TypeError("Funktionen mottar bara datatyp: array");
        }
        let sum = 0;                    // Startvärde på number behövs, annars misslyckas uträkning (undefined + int)
        
    for (let value of inputArray) {
        if (typeof value !== 'number') {  // Om ett värde inte är av datatyp nummer (t.ex. sträng), ignorera för uträkningen..
            console.log(`\nNOTE: One element (${value}) is not a number, skipping for calculation...`);
            continue;
        }

        sum += value;               // För varje numeriskt värde i arrayen summeras värdet
    }
    
    return sum;

}

// Skapa två olika för att testa funktionen
let pointList = [
    2,
    3,
    5,
    2,
    10,
    1,
    1
];

let ageList = [
    5,
    5,
    5,
    5,
    6,
    3,
    11
];
// EXTRA: Spoofed list to test conditions and validations are robust
let spoofList = [
    5,
    "häst",
    5,
    "åsna",
    6,
    3,
    11
];

// Run calculations and present results for each list
console.log("Summa för poänglista: " + calculateArraySum(pointList));
console.log("\nSumma för ålderslista: " + calculateArraySum(ageList));

console.log("\nUträkning för spoofad lista: " + calculateArraySum(spoofList) + " (testsyfte)");