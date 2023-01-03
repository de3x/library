const myLibrary = [];

// Functions
function openForm() {
  document.getElementById('add-book-form').style.display = 'flex';
  overlayOn();
}

function closeForm() {
  document.getElementById('add-book-form').style.display = 'none';
  overlayOff();
}

function clearFormInput() {
  document.getElementById('add-book-form').reset();
}

function Book(title, author, pagecount, completed) {
  this.title = title;
  this.author = author;
  this.pagecount = pagecount;
  this.completed = completed;

  this.info = function () {
    return `${title} by ${author}, ${pagecount} pages, ${
      completed ? 'finished reading.' : 'not yet read.'
    }`;
  };
}

function addBooktoLibrary() {
  let title = document.getElementById('title').value;
  let author = document.getElementById('author').value;
  let pages = document.getElementById('pages').value;
  let readStatus;
  if (document.getElementById('unread').checked) {
    readStatus = 'Unread';
  } else if (document.getElementById('read').checked) {
    readStatus = 'Completed';
  }

  // Create Book object
  let book = {};
  book.title = title;
  book.author = author;
  book.pages = pages;
  book.readStatus = readStatus;

  // Add newly created book to myLibrary array
  myLibrary.push(book);
  console.log(myLibrary);

  // Reset the form fields
  clearFormInput();

  // Close the form field
  closeForm();
  displayBooks();
}

document
  .getElementById('createbook')
  .addEventListener('click', addBooktoLibrary);

const closeFormBtn = document.querySelector('.close-form-btn');
closeFormBtn.addEventListener('click', closeForm);

const library = document.getElementById('library');

function displayBooks() {
  // Empty library div of all children before updating to avoid duplication
  removeAllChildNodes(library);

  // Create updated library
  myLibrary.forEach((book, index) => {
    const newCard = document.createElement('div');
    // Add data-id to identify later for Delete Button

    const spacer = document.createElement('div');
    spacer.classList.add('spacer');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    const p4 = document.createElement('p');
    const p5 = document.createElement('p');
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete Book';
    deleteButton.onclick = function () {
      deleteButton.parentElement.remove();
      myLibrary.splice(index, 1);
    };
    const readButton = document.createElement('button');
    readButton.innerText =
      book.readStatus === 'Unread' ? 'Not Yet Read' : 'Finished';
    let buttonStyle = book.readStatus === 'Unread' ? 'unread' : 'read';
    readButton.classList.add(buttonStyle);
    readButton.onclick = function () {
      if (myLibrary[index].readStatus === 'Unread') {
        myLibrary[index].readStatus = 'Completed';
        readButton.innerText = 'Finished';
        readButton.classList.remove('unread');
        readButton.classList.add('read');
      } else if (myLibrary[index].readStatus === 'Completed') {
        myLibrary[index].readStatus = 'Unread';
        readButton.innerText = 'Not Yet Read';
        readButton.classList.remove('read');
        readButton.classList.add('unread');
      }
    };

    p1.append(`Title: ${book.title}`);
    p2.append(`Author: ${book.author}`);
    p3.append(`Pages: ${book.pages}`);
    p4.append(`Status: ${book.readStatus}`);
    p5.append(`Index: ${index}`);

    newCard.append(p1, p2, p3, spacer, readButton, deleteButton);
    newCard.classList.add('card');
    library.append(newCard);
  });
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function overlayOn() {
  document.getElementById('overlay').style.display = 'block';
}

function overlayOff() {
  document.getElementById('overlay').style.display = 'none';
}
