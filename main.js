// Bookstore Library

// Array to store book information [ID, Title, Author, Price, Quantity]
const books = [
  [1, "Start with why", "Simon Sinek", 80.0, 13],
  [2, "But how do it know", "J. Clark Scott", 59.9, 22],
  [3, "Clean Code", "Robert Cecil Martin", 50.0, 5],
  [4, "Zero to One", "Peter Thiel", 45.0, 12],
  [5, "You don't know JS", "Kyle Simpson", 39.9, 9]
];

// Function to add a new book
function addBook(id, title, author, price, quantity) {
  books.push([id, title, author, price, quantity]);
}

// Function to edit a book
function editBook(id, title, author, price, quantity) {
  for (let i = 0; i < books.length; i++) {
    if (books[i][0] === id) {
      books[i] = [id, title, author, price, quantity];
      break;
    }
  }
}

// Function to delete a book
function deleteBook(id) {
  for (let i = 0; i < books.length; i++) {
    if (books[i][0] === id) {
      books.splice(i, 1);
      break;
    }
  }
}

// Function to display book information
function displayBook(id) {
  for (let i = 0; i < books.length; i++) {
    if (books[i][0] === id) {
      console.log("Book ID:", books[i][0]);
      console.log("Title:", books[i][1]);
      console.log("Author:", books[i][2]);
      console.log("Price:", books[i][3]);
      console.log("Quantity:", books[i][4]);
      break;
    }
  }
}

// Function to search for a book
function searchBook(query) {
  for (let i = 0; i < books.length; i++) {
    if (
      books[i][0] === query ||
      books[i][1].toLowerCase() === query.toLowerCase() ||
      books[i][2].toLowerCase() === query.toLowerCase()
    ) {
      console.log("Book Found:");
      console.log("Book ID:", books[i][0]);
      console.log("Title:", books[i][1]);
      console.log("Author:", books[i][2]);
      console.log("Price:", books[i][3]);
      console.log("Quantity:", books[i][4]);
      return;
    }
  }
  console.log("Book not found.");
}

// Function to sell books and generate invoice
function sellBook(title, quantity, balance) {
  for (let i = 0; i < books.length; i++) {
    if (books[i][1].toLowerCase() === title.toLowerCase()) {
      if (books[i][4] >= quantity) {
        const totalPrice = books[i][3] * quantity;
        if (balance >= totalPrice) {
          books[i][4] -= quantity;
          console.log("Invoice Generated:");
          console.log("Book Title:", books[i][1]);
          console.log("Quantity:", quantity);
          console.log("Total Price:", totalPrice);
          return;
        } else {
          console.log("Insufficient balance to make the purchase.");
          return;
        }
      } else {
        console.log("Insufficient quantity of the book in stock.");
        return;
      }
    }
  }
  console.log("Book not found.");
}

// Example usage
console.log("List of Books:");
console.log(books);
// add new book:
addBook(6, "The Lean Startup", "Eric Ries", 55.0, 15);
console.log("List of Books after adding:");
console.log(books);
deleteBook(6);
console.log("List of Books after deleting book with id=6:");
console.log(books);
console.log("Display book details for book id=2");
displayBook(2);
console.log("search book by title = Clean Code");
searchBook("Clean Code");
console.log("selling book:");
sellBook("Start with why", 5, 400.0);