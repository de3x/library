const myLibrary = [];

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

function addBooktoLibrary(title, author, pages, completed) {
  // todo
}

function openForm() {
  document.querySelector('.add-book-form').style.display = 'flex';
}

function closeForm() {
  document.querySelector('.add-book-form').style.display = 'none';
}
