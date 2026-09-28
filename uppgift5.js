// placeholder presentation
"use strict";

let foodList = [
    "pannkakor", 
    "ostbricka", 
    "hamburgare", 
    "pastasallad", 
    "pizza"
];

console.log("Uppgift 5 - Script start")

console.log("\n1.a)")
console.log(foodList)           // prints the full array item (data structure including values..)

console.log("\n1.b)")
for (let item of foodList) {    // loops through the list and assigns a temporary var to the active dish
    console.log(item)           // presents the active dish (value) only, one at a time
}