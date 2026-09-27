// placeholder presentation
"use strict";

let currency = "SEK";
let unitCost = 100;
let unitCount = 3;
let totalCost = unitCost * unitCount;
let tax = 0.25; // tax (moms) is 25%
let taxedTotalCost = totalCost + totalCost * tax;

console.log(`Pris: ${unitCost} ${currency}`);
console.log(`Antal: ${unitCount} ${currency}`);
console.log(`Totalt: ${totalCost} ${currency}`);
console.log(`Totalt inklusive moms: ${taxedTotalCost} ${currency}`);

  