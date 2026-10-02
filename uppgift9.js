// This script evaluates a detailed list of people (array containing objects for each person)
// Determines for each if they are 'adult' or not, then prints the details for each person
// By Mathias Thorgren, 2026
"use strict";

  const people = [
      {
          name: "Anna",
          age: 30,
          city: "Sundsvall"
      },
      {
          name: "Sofie",
          age: 45,
          city: "Hudiksvall"
      },
      {
          name: "Markus",
          age: 16,
          city: "Härnösand"
      }
  ];

function presentPerson(person) {
    let output = null;

    // Prepare output text with static information values
    // But condition for age limit, and adapt output string thereafter.
    if (person.age < 18) { 
        output = `\n${person.name} bor i ${person.city} och är inte myndig.`
    }
    else {
        output = `\n${person.name} bor i ${person.city} och är myndig.`
    }

    console.log(output);
}

/* Ensure that each full object class (profile)
is used as input for the presentation function. */
for (let person of people) {
    presentPerson(person);
}