// Static comparison of an age variable, utilizing a nested if-conditionedw-flowchart for age groups. 
// Model is akin to typical process of elimination thinking 
// (and probably more useful in more complex assingments)
"use strict";

let age = 19;

if (age >= 18) {                     // Match all non-children first
    if (age >= 65) {                // Then all non-adults
        console.log("Pensionär");   // If neither, then can only be Pensionär
    }
    else {
            console.log("Vuxen");   // If non-child and non-pensionär, can only be Vuxen
    }
}
else {
    console.log("Barn");            // If not matching first check, default to child.
}


