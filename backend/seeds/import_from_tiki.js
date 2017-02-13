const data = require("./data/data.json");
const _ = require("lodash");
const slug = require("speakingurl");
const dbConfig = require("../knexfile");
const knex = require("knex")(
  dbConfig[process.env.NODE_ENV ? process.env.NODE_ENV : "development"]
);
const main = async () => {
  try {
    // Deletes ALL existing entries
    await Promise.all([
      knex("books").del(),
      knex("users").del(),
      knex("reviews").del()
    ]);
    // Prepare users data for inserting to db
    const usersData = data.map(user => {
      const newUser = Object.assign({}, user);
      delete newUser.books;
      delete newUser.tikiLink;
      return newUser;
    });

    // do the actual insertion
    const username_ids = await knex
      .batchInsert("users", usersData)
      .returning("id")
      .then(ids => {
        // Create a map between original user
        // and new id in the database
        const username_ids = {};
        ids.forEach((id, i) => {
          username_ids[usersData[i].username] = id;
        });
        return username_ids;
      });
    console.log("Inserted", usersData.length, "users");

    const booksData = _.chain(data)
      .flatMap(u => u.books)
      .map(book => {
        return {
          name: book.name,
          author: book.author,
          slug: slug(book.name),
          links: JSON.stringify({
            tiki: book.link
          }),
          cover: book.img
        };
      })
      .uniqBy(b => b.slug)
      .value();
    const bookslug_ids = await knex
      .batchInsert("books", booksData)
      .returning("id")
      .then(ids => {
        // Create a map between original user
        // and new id in the database
        const bookslug_ids = {};
        ids.forEach((id, i) => {
          bookslug_ids[booksData[i].slug] = id;
        });
        return bookslug_ids;
      });
    console.log("Inserted", booksData.length, "books");
    // Now append to reviews table
    const reviewsData = _.chain(data)
      .flatMap(u => {
        const userId = username_ids[u.username];
        return u.books.map(b => ({
          user_id: userId,
          book_id: bookslug_ids[slug(b.name)],
          content: b.comment === "" ? null : b.comment
        }));
      })
      .value();
    await knex.batchInsert("reviews", reviewsData);
    console.log("Inserted", reviewsData.length, "reviews");

    console.log("Done");
    process.exit(0);
  } catch (err) {
    console.error(err);
  }
};

main();
