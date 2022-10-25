const booksWrapper = document.querySelector(".books-wrapper");
const titleField = document.querySelector(".title");
const autherField = document.querySelector(".auther");
const addBook = document.querySelector(".add-book");

let booksData = [
  {
    id: 1,
    title: "Feel free to remove me!",
    auther: "Mo Khaled",
  },
];

if (localStorage.getItem("books")) {
  booksData = JSON.parse(localStorage.getItem("books"));
}

booksData.forEach((book) => {
  booksWrapper.innerHTML += `
           <li class="single-book" data-id=${book.id}>
              <h2>${book.title}</h2>
              <h3>${book.auther}</h3>
              <button class="del-btn">Remove</button>
           </li>
    `;
});

addBook.addEventListener("click", () => {
  if (titleField !== "" && autherField !== "") {
    addBooksToArray(titleField.value, autherField.value);
    titleField.value = "";
    autherField.value = "";
  }
});

//Delete logic
booksWrapper.addEventListener("click", (e) => {
  if (e.target.classList.contains("del-btn")) {
    //Remove from local storage
    deleteBookFromLs(e.target.parentElement.getAttribute("data-id"));
    //Remove the item from dom
    e.target.parentElement.remove();
  }
});

const addBooksToArray = (title, auther) => {
  const book = {
    id: Date.now(),
    title,
    auther,
  };
  booksData.push(book);
  //Add books to Dom
  addBooksToDom(booksData);
  //Add books to local storage
  addDataToLocalStorage(booksData);
};

const addBooksToDom = (booksArr) => {
  booksWrapper.innerHTML = "";
  booksArr.forEach((book) => {
    booksWrapper.innerHTML += `
           <li class="single-book" data-id=${book.id}>
              <div>
                 <h2>${book.title}</h2>
                 <h3>${book.auther}</h3>
              </div>
              <button class="del-btn">Remove</button>
           </li>
    `;
  });
};

const addDataToLocalStorage = (booksArr) => {
  window.localStorage.setItem("books", JSON.stringify(booksArr));
};

const getItemsFromLocalStorage = () => {
  let books = window.localStorage.getItem("books");
  if (books) {
    let data = JSON.parse(books);
    addBooksToDom(data);
  }
};

const deleteBookFromLs = (bookId) => {
  booksData = booksData.filter((book) => book.id != bookId);
  addDataToLocalStorage(booksData);
};

getItemsFromLocalStorage();
console.log(booksData);
