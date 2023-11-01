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
    this.changeStatus = function(status) {
      this.read = status
    }
  }

  function addBookToLibrary(title, author, pages, read) {
    console.log(myLibrary.length);
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook)
    console.log(myLibrary.length);
    const bookBox = document.createElement('div');
    container.append(bookBox);
    bookBox.setAttribute('class', 'bookBox');
    bookBox.setAttribute('id', 'book' + myLibrary.length);
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
   