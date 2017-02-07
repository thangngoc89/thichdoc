const fs = require("mz/fs");
const data = require("../../data/data.json");
const hat = require("hat");
const slug = require("speakingurl");
const _ = require("lodash");

const randomId = () => hat().slice(0, 6);
const json = data => JSON.stringify(data, null, 2);
// Convert Books

const alterBookField = book => {
  const newBook = Object.assign({}, book, {
    id: randomId(),
    slug: slug(book.name),
    linkTiki: book.link,
    cover: book.img
  });
  delete newBook.img;
  delete newBook.link;

  return newBook;
};

const allBooks = _.chain(data)
  .flatMap(user => user.books)
  .uniqBy(book => book.link)
  .map(alterBookField)
  .value();

// Write books file
fs.writeFileSync("./books.json", json(allBooks));

// Keep a list reference between books and users
const bookIds = allBooks.map(b => [b.name, b.id]);
const allUsers = data.map(u => {
  const currentUserBookIds = u.books.map(b => {
    const nameIdArray = bookIds.find(nameId => nameId[0] === b.name);

    return nameIdArray ? nameIdArray[1] : null;
  });
  u.books = currentUserBookIds;
  return u;
});

fs.writeFileSync("./users.json", json(allUsers));
