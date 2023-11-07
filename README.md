# libraryProject
Javascript project to input book date.

Create a library that is housed in a simple array in js.
Have a button that onClick will provide a form to complete with Title, Author, pages, and read.
Submission of this form will add the book to Library.
Show added book on the page via a table or cards.
Provide a button with each listing to remove the book from the library.
(Possibly add a button to toggle whether the book has been read.)

Add Book:
onClick - pop up to complete book info (use the HTML dialogue element to do this using a modal. In js -> HTMLDialogElement.show())
    Did this via dialog.showModal() in js. COMPLETE
onSubmit - Add book object to array (js function built) COMPLETE
addCard to library that displays book info COMPLETE
//-Green card is book that has been read (Not doing these)
//-Red card is unread book
//-yellow card is currently being read

Each card has a button to "remove from library":
onClick - delete object from array and card from page
(I need to create an id in the HTML that associates the "card" with the array item. This id needs to change if an item ahead of it changes. That way it continues to reflect the books position within the array.)
Query all delete buttons.
On-click grab id # for that object (Array Index)
Delete that array item (splice)
Delete the card containing that items info. (class="book#")

Each card has a button to change the "read" status:
onClick - change read value (changeStatus)