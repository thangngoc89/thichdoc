const fs = require("mz/fs");
const data = require("./data.json");
const hat = require("hat");
const slug = require("speakingurl");
const _ = require("lodash");
const url = require("url");

const randomId = () => hat().slice(0, 8);
const json = data => JSON.stringify(data, null, 2);

// Convert Books
const alterBookField = book => {
  const newBook = Object.assign({}, book, {
    id: randomId(),
    createdAt: Date.now(),
    slug: slug(book.name),
    links: {
      tiki: book.link
    },
    cover: book.img
  });
  delete newBook.comment;
  delete newBook.img;
  delete newBook.link;

  return newBook;
};

const allBooks = _.chain(data)
  .flatMap(user => user.books)
  .uniqBy(book => book.link)
  .map(alterBookField)
  .value();

// Keep a list reference between books and users
const bookIds = allBooks.map(b => [b.name, b.id]);
let allUsers = data.map(u => {
  const books = u.books.map(b => {
    const nameIdArray = bookIds.find(nameId => nameId[0] === b.name);

    if (typeof nameIdArray === "undefined") {
      console.log(b);
    }
    return Object.assign({}, b, {
      id: nameIdArray[1]
    });
  });
  u.createdAt = Date.now();
  u.id = randomId();
  u.books = books;
  return u;
});

let allReviews = allUsers.map(u => u.books.map(book => {
  return {
    userId: u.id,
    bookId: book.id,
    content: book.comment === "" ? null : book.comment
  };
}));
allReviews = _.flatten(allReviews);

// Remove books info from allUsers
allUsers = allUsers.map(u => {
  const newUser = Object.assign({}, u);
  delete newUser.books;
  return newUser;
});

fs.writeFileSync("./books.json", json(allBooks));
fs.writeFileSync("./reviews.json", json(allReviews));
fs.writeFileSync("./users.json", json(allUsers));
