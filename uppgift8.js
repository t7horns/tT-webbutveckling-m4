// Create a generic book object and utilize it with a function call
"use strict";

// Generic book object
class book {
    constructor(title, author, publishingYear) {
        this.title = title;
        this.author = author;
        this.publishingYear = publishingYear;
    }
}

function presentBook(book) {
    let output = `\nTitel: ${book.title}\nFörfattare: ${book.author}\nUtgivningsår: ${book.publishingYear}`;
    return output;
}

new hobbit = book("The Hobbit", "J.R.R Tolkien", "1937");

presentBook(hobbit);