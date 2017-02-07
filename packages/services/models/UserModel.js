const data = require("../users.json");
const BookModel = require("./BookModel");

const UserModel = {
  findByIds: ids => {
    return data.filter(u => ids.indexOf(u.id) > -1);
  },
  findById: id => {
    return data.find(u => u.id === id);
  },
  findByUsername: username => {
    return data.find(u => u.username === username);
  },
  findAll: (skip = 0, limit = 20) => {
    if (limit > 20) {
      throw new Error("Can't query more than 20 records");
    }
    return data.slice(skip, skip + limit);
  },
  findRecommendBooksById: id => {
    const bookIds = UserModel.findById(id).books;

    // NOTE: We'll also have comment here, it was ommitted during mocking
    return BookModel.findByIds(bookIds);
  }
};

module.exports = UserModel;
