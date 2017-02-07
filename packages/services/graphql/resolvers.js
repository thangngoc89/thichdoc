const _ = require("lodash");
const log = require("debug")("td:graphql-resolver");

const { hasField } = require("../helpers/getFields");

const resolveFunctions = {
  Query: {
    Book: (_, { id, slug }, undefined, info) => {
      allBooks.find(book => book.slug === id);
    },
    allBooks: (_, { skip = 0, limit = 20 }, __, info) => [
      ...allBooks.slice(skip, skip + limit)
    ],
    User: (_, { username }) => allUsers.find(u => u.username === username),
    allUsers: (_, { skip, limit }, __, info) =>
      
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
