// This script evaluates a single age variable and prints the corresponding age group.
// By Mathias Thorgren, 2026

// This file now has two solutions after correction according to the assignment. 

/* The orginal solution (now disabled - commented out):
    Static comparison of age variable, using a nested if-conditioned-flowchart for age groups. 
    (akin to typical process of elimination thinking)
*/

// -SCRIPT 1 START-
/*
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
*/
// -SCRIPT 1 END-


/* The second solution:
    This solution uses if, else if & else. Excluding bottom-age range first, 
    then top-age range and finally defaulting to the middle age range.
*/

// -SCRIPT 2 START-
"use strict";

let age = 64;

if (age < 18) {
    console.log("Barn");
} else if (age >= 65) {
    console.log("Pensionär");
} else {
    console.log("Vuxen");
}
// -SCRIPT 2 END-

