const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
      return `${title} by ${author}, ${pages}, ${read}`;
    }
  }

  function addBookToLibrary(title, author, pages, read) {
    myLibrary.push({
      title : title,
      author : author,
      pages : pages,
      read : read
    })
  }
  
  addBookToLibrary("The Hobbit", "J.R.R. Tolkien", "295 pages", "Read")
  addBookToLibrary("The Lord of the Rings", "J.R.R. Tolkien", "Too Many", "Reading")

  console.log(myLibrary)

