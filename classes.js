// Single book class
class Book {
  constructor(id, title, auther) {
    this.id = id;
    this.title = title;
    this.auther = auther;
  }
}

// Render of the books in the DOM
class BooksInDom {
  static displayBooks() {
    const books = BooksAtLocalStorage.getBooksFromLs();
    books.forEach((book) => BooksInDom.addBook(book));
  }

  // Add book to the ui
  static addBook(book) {
    const booksWrapper = document.querySelector(".books-wrapper");

    booksWrapper.innerHTML += `
    <li class="single-book" data-id=${book.id}>
        <div>
            <h2>${book.title}</h2>
            <h3>${book.auther}</h3>
            <button class="del-btn">Remove</button>
        </div>
    </li>
    `;
  }

  // remove book from the ui
  static removeBook(element) {
    if (element.classList.contains("del-btn")) {
      const singleBookWrapper = element.parentElement.parentElement;
      singleBookWrapper.remove();
    }
  }
}

// Getting & setting books from & inside local storage
class BooksAtLocalStorage {
  static getBooksFromLs() {
    let lsBooksArr;
    if (localStorage.getItem("books-list") === null) {
      lsBooksArr = [];
    } else {
      lsBooksArr = JSON.parse(localStorage.getItem("books-list"));
    }
    return lsBooksArr;
  }

  static addBooksToLs(book) {
    const booksList = BooksAtLocalStorage.getBooksFromLs();
    booksList.push(book);
    localStorage.setItem("books-list", JSON.stringify(booksList));
  }

  static removeBookFromLs(bookId) {
    const booksList = BooksAtLocalStorage.getBooksFromLs();
    booksList.forEach((book, index) => {
      if (book.id === Number(bookId)) {
        booksList.splice(index, 1);
      }
    });
    localStorage.setItem("books-list", JSON.stringify(booksList));
  }
}

// Invoking books representaion method
document.addEventListener("DOMContentLoaded", BooksInDom.displayBooks);

// Add books in the Ui
const titleField = document.querySelector(".title");
const autherField = document.querySelector(".auther");
const addBookBtn = document.querySelector(".add-book");
const successMsg = document.querySelector(".book-added");
const errorMsg = document.querySelector(".error-msg");

addBookBtn.addEventListener("click", () => {
  if (titleField.value !== "" && autherField.value !== "") {
    const newBook = new Book(Date.now(), titleField.value, autherField.value);
    BooksInDom.addBook(newBook);
    // reset fields values
    titleField.value = "";
    autherField.value = "";
    // Success & failer messages on adding books
    successMsg.classList.add("show-message");
    errorMsg.classList.remove("show-message");
    // Add book to local storage
    BooksAtLocalStorage.addBooksToLs(newBook);
  } else {
    errorMsg.classList.add("show-message");
    successMsg.classList.remove("show-message");
  }
});

// Remove a book from the list
const booksWrapper = document.querySelector(".books-wrapper");
booksWrapper.addEventListener("click", (e) => {
  BooksInDom.removeBook(e.target);
  // Remove book from local storage
  BooksAtLocalStorage.removeBookFromLs(
    e.target.parentElement.parentElement.dataset.id
  );
});
