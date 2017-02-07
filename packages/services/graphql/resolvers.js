const _ = require("lodash");
const log = require("debug")("td:graphql-resolver");
const slug = require("speakingurl");
const hat = require("hat");
const { hasField } = require("../helpers/getFields");

// const fs = require("mz/fs");
// HELPER FUNCTIONS
const randomId = () => hat().slice(0, 5);
// ADD DATA
const data = require("../../../data/data.json");

const allUsers = data;

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

const resolveFunctions = {
  Query: {
    Book: (_, { id, slug }, undefined, info) => {
      allBooks.find(book => book.slug === id);
    },
    allBooks: (_, { skip = 0, limit = 20 }, __, info) => [
      ...allBooks.slice(skip, skip + limit)
    ],
    User: (_, { username }) => allUsers.find(u => u.username === username),
    allUsers: (_, { skip = 0, limit = 20 }, __, info) =>
      allUsers.slice(skip, skip + limit)
  },
  Mutation: {
    addBook: (_, { postId }) => {
      const post = _.find(posts, { id: postId });
      if (!post) {
        throw new Error(`Couldn't find post with id ${postId}`);
      }
      post.votes += 1;
      return post;
    }
  },
  Book: {
    recommendBy: book => {
      const userRecommendedThisBook = allUsers.filter(user => {
        if (
          typeof user.books !== "undefined" &&
            Boolean(user.books.find(b => b.name === book.name))
        ) {
          return true;
        }
        return false;
      });
      if (!userRecommendedThisBook) {
        return null;
      }
      return userRecommendedThisBook.map(u => ({
        user: u,
        content: u.books.find(b => b.name === book.name).comment
      }));
    }
  },
  User: {
    recommendBooks: user =>
      user.books.map(alterBookField).map(b => ({ book: b, content: b.comment }))
  }
};

module.exports = resolveFunctions;
