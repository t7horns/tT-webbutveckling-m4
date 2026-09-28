// Utilize a function to calculate and present area (width*height) based on predefined room parameters.
"use strict";

// Definiera funktion, mottar bredd/höjdparametrar, räknar ut och returnerar arean
function calculateArea(width, height) {
    let area = width * height;
    return area;
}

// Nyttja funktionen med statiska b/h-parametrar, lagra i variabel
let wardrobeArea = calculateArea(5, 4);
let bathroomArea = calculateArea(7, 6);
let livingroomArea = calculateArea(7, 6);

// Presentera variablerna med verbos kontext
console.log(`Arean för garderoben är ${wardrobeArea} kvadratmeter`);
console.log(`Arean för badrummet är ${bathroomArea} kvadratmeter`);
console.log(`Arean för vardagsrummet är ${livingroomArea} kvadratmeter`);

