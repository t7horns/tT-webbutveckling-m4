// This script creates an array of dishes, then presents its contents in various ways, both before and after manipulating the array.
// By Mathias Thorgren, 2026
"use strict";

let foodList = [
    "pannkakor", 
    "ostbricka", 
    "hamburgare", 
    "pastasallad", 
    "pizza"
];

console.log("Uppgift 5 - Script start");

console.log("\n1.a)");
console.log(foodList);           // prints the full array item (data structure including values..)

console.log("\n1.b)");
for (let item of foodList) {    // loops through the list and assigns a temporary var to the active dish
    console.log(item);           // presents the active dish (value) only, one at a time
}

console.log("\n2)");
console.log(foodList[0]);        // 0 == first value in array

console.log("\n3)");
console.log(foodList[foodList.length - 1]); // length -1 is always the last value

console.log("\n4)");
console.log("Adding 'sushi' to the food list");
foodList.push("sushi");

console.log("\n5)");
console.log(`Removing the first item from the food list: '${foodList[0]}'`)
foodList.shift();

console.log("\n6)");
for (let item of foodList) {
    console.log(item);   
}