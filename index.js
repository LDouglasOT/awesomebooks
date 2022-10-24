const booksWrapper = document.querySelector(".books-wrapper");
const singleBook = document.querySelectorAll(".single-book");

let dataBooks = [
  {
    id: 0,
    title: "Feel free to remove me!",
    auther: "Mo Khaled",
  },
  {
    id: 1,
    title: "Feel free to remove me!",
    auther: "Luzinda Douglas",
  },
];

const ul = document.createElement("ul");
const booksGenerator = () => {
  dataBooks.map((book) => {
    let li = document.createElement("li");
    li.innerHTML = `
    <h2>${book.title}</h2>
    <h2>${book.auther}</h2>
    <button class="remove-btn" data-set=${book.id}>Remove</button>
    `;
    ul.appendChild(li);
  });
};

singleBook.forEach((book, i) => {
  dataBooks.push(book);
});
console.log(dataBooks);
booksGenerator();
const maindiv = document.querySelector(".books-div").appendChild(ul);
const removeBtn = document.querySelectorAll(".remove-btn");
removeBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const test = dataBooks.filter((item) => item.id == e.target.dataset.set);
    console.log(test);
  });
});
