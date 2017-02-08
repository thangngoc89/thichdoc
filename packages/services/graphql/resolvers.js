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
    User: (_, { username }) => {
      return UserModel.findByUsername(username);
    },
    allBooks: (_, { first, skip }) => BookModel.findAll(skip, first),
    allUsers: (_, { first, skip }) => UserModel.findAll(skip, first),
    allFeaturedFigures: (_, { first, skip }) =>
      // TODO: Implement where isFigure: true
      UserModel.findAll(skip, first, { where: { isFigure: true } }),
    _allFeaturedFiguresMeta: () => ({
      count: UserModel.count()
    })
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
