// Create a generic book object and utilize it with a function call
"use strict";

// Generic book object
class Book {
    constructor(title, author, publishingYear) {
        this.title = title;
        this.author = author;
        this.publishingYear = publishingYear;
    }
}

function presentBook(Book) {
    let output = `\nTitel: ${Book.title}\nFörfattare: ${Book.author}\nUtgivningsår: ${Book.publishingYear}`;
    console.log(output);
}

let hobbit = new Book("The Hobbit", "J.R.R Tolkien", "1937");

presentBook(hobbit);