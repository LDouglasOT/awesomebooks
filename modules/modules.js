

 export const removeBook=(element)=> {
    if (element.classList.contains('del-btn')) {
      const singleBookWrapper = element.parentElement;
      singleBookWrapper.remove();
    }
  }

  export const addBook=(book) =>{
    const booksWrapper = document.querySelector('.books-wrapper');

    booksWrapper.innerHTML += `
    <li class="single-book" data-id=${book.id}>
        <div>
            <h2>${book.title}</h2>
            <h3>${book.auther}</h3>
        </div>
        <button class="del-btn">Remove</button>
    </li>
    `;
  }

 export const getBooksFromLs=()=> {
    let lsBooksArr;
    if (localStorage.getItem('books-list') === null) {
      lsBooksArr = [];
    } else {
      lsBooksArr = JSON.parse(localStorage.getItem('books-list'));
    }
    return lsBooksArr;
  }

export const displayBooks=()=> {
    const books = getBooksFromLs();
    books.forEach((book) => addBook(book));
}