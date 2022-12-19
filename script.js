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

// Example Book
// const flies = new Book('Lord of the Flies', 'William Golding', 321, true);
// console.log(flies.info());
