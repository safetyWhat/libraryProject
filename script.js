const myLibrary = [];

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
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook)
  }
  
  addBookToLibrary("The Hobbit", "J.R.R. Tolkien", "295 pages", "Read")
  addBookToLibrary("The Lord of the Rings", "J.R.R. Tolkien", "Too Many", "Reading")

  console.log(myLibrary)

  const dialog = document.querySelector("dialog");
  const showButton = document.querySelector("button");
  const closeButton = document.querySelector("dialog button");

  showButton.addEventListener("click", () => {
    dialog.showModal();
  });

  closeButton.addEventListener("click", () => {
    dialog.close();
  });