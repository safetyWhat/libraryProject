const myLibrary = [];
const dialog = document.querySelector("dialog");
const showButton = document.querySelector("button");
const closeButton = document.querySelector("dialog #submit");
const newBookForm = document.querySelector("form");
let newTitle = document.getElementById("title");
let newAuthor = document.getElementById("author");
let newPages = document.getElementById("pages");
let newReadStatus = document.getElementById("read");
const container = document.querySelector('.container');

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.changeStatus = function(status) { //Need this function to be able to change status in the future.
      this.read = status
    }
  }

function addBookToLibrary(title, author, pages, read) {
  console.log(myLibrary.length);
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook)
  console.log(myLibrary.length);
  const bookBox = document.createElement('div'); //Create div for the book details to land in.
  container.append(bookBox);
  bookBox.setAttribute('class', 'bookBox');
  bookBox.setAttribute('id', 'book' + myLibrary.length); //Assign id for which book it is for possible deletion later.
  bookBox.innerHTML = `
    <h3 class="bookTitle"> ${title} </h3>
    <p class="bookAuthor"> ${author} </p>
    <p class="bookPages">${pages}</p>
    <button class="bookStatusChange">${read}</button>
    <button class="bookRemove">Delete</button>`; 
}
  
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", "295 pages", "Read")
addBookToLibrary("The Lord of the Rings", "J.R.R. Tolkien", "Too Many", "Reading")

console.log(myLibrary)
showButton.addEventListener("click", () => {
  dialog.showModal();
});

document.getElementById('submit').addEventListener('click', function(event) {
  event.preventDefault();
  dialog.close();
  addBookToLibrary(newTitle.value , newAuthor.value, newPages.value, newReadStatus.value);
  console.log(myLibrary);
  newBookForm.reset();
})
   