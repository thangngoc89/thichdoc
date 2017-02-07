const _ = require("lodash");
const log = require("debug")("td:graphql-resolver");
const { hasField } = require("../helpers/getFields");

const UserModel = require("../models/UserModel");
const BookModel = require("../models/BookModel");

const resolveFunctions = {
  Query: {
    Book: (_, { id }) => BookModel.findById(id),
    allBooks: (_, { skip, limit }, __, info) => BookModel.findAll(skip, limit),
    User: (_, { username }) => UserModel.findById(username),
    allUsers: (_, { skip, limit }, __, info) => UserModel.findAll(skip, limit)
  },
  Mutation: {
    addBook: () => {}
  },
  Book: {
    recommendBy: book => BookModel.findRecommendByById(book.id)
  },
  User: {
    recommendBooks: user => UserModel.findRecommendBooksById(user.id)
  }
};

module.exports = resolveFunctions;
