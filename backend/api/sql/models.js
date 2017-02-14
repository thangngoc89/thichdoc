import Bookshelf from "bookshelf";
import knex from "./knex";
import _ from "lodash";

const bookshelf = Bookshelf(knex);
bookshelf.plugin("pagination");

export const User = bookshelf.Model.extend({
  tableName: "users",
  books: function() {
    return this.belongsToMany(Book, "reviews").withPivot(["content"]);
  },
  getByUsername: function(username) {
    return new User().where({ username }).fetch().then(res => res.toJSON());
  },
  allUsers: function(offset, limit, orderBy = "createdAt", where) {
    const qr = this.orderBy(orderBy);
    if (where) {
      qr.where(where);
    }
    return qr
      .fetchPage({
        offset,
        limit
      })
      .then(result => {
        const edges = _.isEmpty(result.models) ? [] : result.toJSON();
        return {
          edges,
          pagination: result.pagination
        };
      });
  },
  getReviewsById: function(user_id, withBook = false) {
    let qr = new Review().where({ user_id });
    if (withBook) {
      qr = qr.fetchAll({ withRelated: ["book"] });
    } else {
      qr = qr.fetchAll();
    }
    return qr.then(res => res.toJSON()).then(res => res.map(review => {
      return {
        content: review.content,
        book: review.book
      };
    }));
  }
});

export const Book = bookshelf.Model.extend({
  tableName: "books",
  users: function() {
    return this.belongsToMany(User, "reviews").withPivot(["content"]);
  },
  getById: function(id) {
    console.log("model", id);
    return this.where({ id: id }).fetch().then(res => {
      if (res) {
        return res.toJSON();
      }
      return null;
    });
  }
});

export const Review = bookshelf.Model.extend({
  tableName: "reviews",
  idAttribute: ["book_id", "user_id"],
  book: function() {
    return this.belongsTo(Book);
  },
  user: function() {
    return this.belongsTo(User);
  }
});
