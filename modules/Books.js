import {getBooksFromLs} from "./modules.js"
export default class Book {
    constructor(id, title, auther) {
      this.id = id;
      this.title = title;
      this.auther = auther;
    }
  }

export const addBooksToLs=(book)=> {
    const booksList = getBooksFromLs();
    booksList.push(book);
    localStorage.setItem('books-list', JSON.stringify(booksList));
  }