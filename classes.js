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