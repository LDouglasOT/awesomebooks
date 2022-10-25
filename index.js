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
    <button class="remove-btn">Remove</button>
    `;
    ul.appendChild(li);
  });
};

singleBook.forEach((book, i) => {
  dataBooks.push(book);
});
booksGenerator();
const maindiv = document.querySelector(".books-wrapper").appendChild(ul);

const add=document.querySelector(".add");
add.addEventListener("click",()=>{
 let title= document.querySelector(".title").value
 let auther= document.querySelector(".author").value
 let li = document.createElement("li");
 li.innerHTML = `
 <h2>${title}</h2>
 <h2>${auther}</h2>
 <button class="remove-btn">Remove</button>
 `;
 const maindiv = document.querySelector(".books-wrapper ul").appendChild(li);
 
console.log(window.localStorage.getItem("myObject"))

 const close=document.querySelectorAll(".remove-btn")
for(let i=0;i<close.length;i++){

  close[i].addEventListener("click",()=>{
    close[i].parentElement.remove();
  })
}
})


