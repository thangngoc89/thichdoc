const data = require("../books.json");

const BookModel = {
  findByIds: ids => {
    return data.filter(b => ids.indexOf(b.id) > -1);
  },
  findById: id => {
    return data.find(b => b.id === id);
  },
  findAll: (skip = 0, limit = 20) => {
    if (limit > 20) {
      throw new Error("Can't query more than 20 records");
    }
    return data.slice(skip, skip + limit);
  },
  findRecommendByById: id => {
    // NOTE: We should have "comment" here too just
    // in case I forget about it
    const userIds = BookModel.findById(id).recommendBy;
    return UserModel.findByIds(userIds);
  }
};

// Export module before require UserMode to avoid circular dependencies
// https://coderwall.com/p/myzvmg/circular-dependencies-in-node-js
module.exports = BookModel;

const UserModel = require("./UserModel");
