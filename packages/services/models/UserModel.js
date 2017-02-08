const data = require("../users.json");

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
    return BookModel.findByIds(bookIds).map(book => ({
      book,
      content: null
    }));
  },
  // This thing with database would be soooo hard. Careful
  findRecommendBooksByIds: ids => {
    console.log("It hit me");
    const users = UserModel.findByIds(ids);

    const usersBooksList = users.map(user => BookModel.findByIds(
      user.books
    ).map(book => ({
      book,
      content: null // comment of this recommendation
    })));

    // Dataloader requires the return is a Promise<Array<value>>
    return new Promise(resolve => resolve(usersBooksList));
  }
};

module.exports = UserModel;

// Export module before require UserMode to avoid circular dependencies
// https://coderwall.com/p/myzvmg/circular-dependencies-in-node-js
const BookModel = require("./BookModel");
