const myLibrary = [];
const dialog = document.querySelector("dialog");
const showButton = document.querySelector(".addBook");
const closeButton = document.querySelector("dialog #submit");
const newBookForm = document.querySelector("form");
let newTitle = document.getElementById("title");
let newAuthor = document.getElementById("author");
let newPages = document.getElementById("pages");
let newReadStatus = document.getElementById("read");
const container = document.querySelector('.container');
let bookCount = 0;

document.addEventListener('click', e => { //listens to whole document for a click on an element with the class of .bookRemove
  if (e.target.matches('.bookRemove')) {
    deleteBook(e.target.getAttribute('id'));
  }
});

document.addEventListener('click', e => {
  if (e.target.matches('.bookStatusChange')) {
    let bookNum = e.target.nextElementSibling.getAttribute('id'); //will provide index of book in myLibrary
    const statusHtml = e.target;
    let currStatus = myLibrary[bookNum].read; //provides current read status
    if(currStatus === 'Read') {
      myLibrary[bookNum].changeStatus('Unread'); //Change status in myLibrary
      statusHtml.textContent = 'Unread'; //Change status in GUI
    } else if (currStatus === 'Unread') {
      myLibrary[bookNum].changeStatus('Reading');
      statusHtml.textContent = 'Reading';
    } else {
      myLibrary[bookNum].changeStatus('Read');
      statusHtml.textContent = 'Read';
    }
  }
});

class Book {
  constructor (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

    changeStatus(status) { //Need this function to be able to change status in the future.
      this.read = status;
    }
  };

function addBookToLibrary(title, author, pages, read) {
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
};

showButton.addEventListener("click", () => {
  dialog.showModal();
});

document.getElementById('submit').addEventListener('click', function(event) {
  event.preventDefault();
  dialog.close();
  addBookToLibrary(newTitle.value , newAuthor.value, newPages.value, newReadStatus.value);
  newBookForm.reset();
  libraryLoop(bookCount);
});

function displayBook(title, author, pages, read, i) { 
  const bookBox = document.createElement('div'); //Create div for the book details to land in.
  container.append(bookBox);
  bookBox.setAttribute('class', 'bookBox');
  bookBox.setAttribute('id', 'book' + i); //Assign id for which book it is for possible deletion later.
  bookBox.innerHTML = `
    <h3 class="bookTitle"> ${title} </h3>
    <p class="bookAuthor"> ${author} </p>
    <p class="bookPages">${pages}</p>
    <button class="bookStatusChange">${read}</button>
    <button class="bookRemove" id="${i}">Delete</button>`; 
};

const deleteBook = function(bookNum) {
  myLibrary.splice(bookNum, 1); //Deletes book from the myLibrary array.
  document.querySelectorAll(".bookBox").forEach(element => element.remove()); //Deletes ALL books visually.
  libraryLoop(0); //Creates new cards for books. This allows reassignment of the delete button ids.
};

function libraryLoop(i) { //This loops through myLibrary to create visual cards for books.
  while(i < myLibrary.length) {
    let data = myLibrary[i];
    let {title, author, pages, read} = data
    displayBook(title, author, pages, read, i);
    i++;
  }
  bookCount = myLibrary.length;
};
 
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", "295 pages", "Read");
addBookToLibrary("The Lord of the Rings", "J.R.R. Tolkien", "Too Many", "Reading");
libraryLoop(bookCount);