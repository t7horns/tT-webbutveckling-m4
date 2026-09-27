// placeholder presentation
"use strict";

let age = 19;

if (age > 18) {                     // Match all non-children first
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


