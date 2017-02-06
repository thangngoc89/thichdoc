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
    Book(_, { id, slug }, undefined, info) {
      const book = allBooks.find(book => book.slug === id);
      if (hasField(info, "recommendBy")) {
        const userRecommendedThisBook = allUsers.filter(user => {
          if (
            typeof user.books !== "undefined" &&
              Boolean(user.books.find(b => b.name === book.name))
          ) {
            return true;
          }
          return false;
        });
        book.recommendBy = userRecommendedThisBook.map(u => ({
          user: u,
          content: u.books.find(b => b.name === book.name).comment
        }));
      }
      return book;
    },
    allBooks(_, { skip = 0, limit = 20 }, __, info) {
      const res = [...allBooks.slice(skip, skip + limit)];
      if (hasField(info, "recommendBy")) {
        throw new Error(
          "Query recommendBy on allBooks operation is not allowed"
        );
      }
      return res;
    },
    User(_, { username }) {
      const user = allUsers.find(u => u.username === username);
      if (typeof user !== "undefined") {
        user.recommendBooks = user
          .books.map(alterBookField)
          .map(b => ({ book: b, content: b.comment }));
      }
      return user;
    },
    allUsers(_, { skip = 0, limit = 20 }, __, info) {
      const users = allUsers.slice(skip, skip + limit);
      if (hasField(info, "recommendBooks")) {
        throw new Error(
          "Query recommendBooks on allUsers operation is not allowed"
        );
      }
      return user;
    }
  },
  Mutation: {
    addBook(_, { postId }) {
      const post = _.find(posts, { id: postId });
      if (!post) {
        throw new Error(`Couldn't find post with id ${postId}`);
      }
      post.votes += 1;
      return post;
    }
  }
};

module.exports = resolveFunctions;
