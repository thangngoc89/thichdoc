const data = require("../user.json");
const BookModel = require("./BookModel");

class UserModel {
  findByIds = ids => {};

  findByUsername = username => {
    return data.find(u => u.username === username);
  };

  findAll = (skip = 0, limit = 20) => {
    if (limit > 20) {
      throw new Error("Can't query more than 20 records");
    }
    return data.slice(skip, skip + limit);
  };

  findRecommendBooksByUsername = username => {
    const user = this.findByUsername(username);

    // Some MAGIC to have ids of recommend books goes in here
    const bookIds = user.books;
    return Book.findByIds(bookIds);
  };
}

module.exports = UserModel;
