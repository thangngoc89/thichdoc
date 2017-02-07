const data = require("../user.json");
const BookModel = require("./BookModel");

class UserModel {
  findByIds = ids => {
    return data.filter(u => ids.indexOf(u.id) > -1);
  };

  findByUsername = username => {
    return data.find(u => u.username === username);
  };

  findById = id => {
    return data.find(u => u.id === id);
  };

  findAll = (skip = 0, limit = 20) => {
    if (limit > 20) {
      throw new Error("Can't query more than 20 records");
    }
    return data.slice(skip, skip + limit);
  };

  findRecommendBooksById = id => {
    const bookIds = this.findById(id).books;

    // NOTE: We'll also have comment here, it was ommitted during mocking
    return Book.findByIds(bookIds);
  };
}

module.exports = UserModel;
