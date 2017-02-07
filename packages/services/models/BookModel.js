const data = require("../book.json");
const UserModel = require("./UserModel");

class BookModel {
  findByIds = ids => {
    return data.filter(b => ids.indexOf(b.id) > -1);
  };

  findById = id => {
    return data.find(b => b.id === id);
  };

  findAll = (skip = 0, limit = 20) => {
    if (limit > 20) {
      throw new Error("Can't query more than 20 records");
    }
    return data.slice(skip, skip + limit);
  };

  findRecommendByById = id => {
    const userIds = this.findById(id);
    return book;
  };
}

module.exports = BookModel;
