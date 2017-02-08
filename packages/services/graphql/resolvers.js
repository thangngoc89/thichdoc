const _ = require("lodash");
const log = require("debug")("td:graphql-resolver");

const UserModel = require("../models/UserModel");
const BookModel = require("../models/BookModel");

const DataLoader = require("dataloader");
const recommendBooksLoader = new DataLoader(
  ids => UserModel.findRecommendBooksByIds(ids)
);

const resolveFunctions = {
  Query: {
    Book: (_, { id }) => {
      return BookModel.findById(id);
    },
    allBooks: (_, { skip, limit }, __, info) => BookModel.findAll(skip, limit),
    User: (_, { username }) => {
      return UserModel.findByUsername(username);
    },
    allUsers: (_, { skip, limit }, __, info) => UserModel.findAll(skip, limit)
  },
  Mutation: {
    addBook: () => {}
  },
  Book: {
    recommendBy: book => {
      return BookModel.findRecommendByById(book.id).map(user => ({
        user,
        content: null
      }));
    }
  },
  User: {
    recommendBooks: user => recommendBooksLoader.load(user.id)
  }
};

module.exports = resolveFunctions;
