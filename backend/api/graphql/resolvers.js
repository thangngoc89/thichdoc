import _ from "lodash";
import debug from "debug";
import { Book, User, Review } from "../sql/models";
import { writeFileSync } from "fs";
import hasFields from "./utils/hasFields";
const log = debug("td:graphql-resolver");

const UserModel = {};
const BookModel = {};

const resolveFunctions = {
  Query: {
    Book: (_, { id }) => {
      return new Book().where("id", id);
    },
    User: (underfined, { username }) => {
      return new User().getByUsername(username);
    },
    allBooks: (underfined, { first, skip }) => BookModel.findAll(skip, first),
    allUsers: (underfined, { offset, limit, orderBy = "createdAt" }) => {
      return new User().allUsers(offset, limit, orderBy);
    },
    allFeaturedFigures: (_, { offset, limit, orderBy }) => {
      return new User().allUsers(offset, limit, "createdAt");
    }
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
    recommendBooks: (user, noop, noop2, info) => {
      return new User().getReviewsById(user.id, hasFields(info, "book"));
    }
  }
};

export default resolveFunctions;
