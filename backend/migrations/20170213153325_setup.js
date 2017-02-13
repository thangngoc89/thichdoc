exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable("users", function(table) {
      table
        .uuid("id")
        .primary()
        .index()
        .defaultTo(knex.raw("uuid_generate_v1mc()"));
      table.string("username").index();
      table.string("email").unique();
      table.string("name");
      table.string("nickname");
      table.string("job");
      table.text("bio");
      table.string("avatar");
      table.timestamp("createdAt").defaultTo(knex.fn.now());
      table.timestamp("updatedAt").defaultTo(knex.fn.now());
    }),
    knex.schema.createTable("books", function(table) {
      table
        .uuid("id")
        .primary()
        .index()
        .defaultTo(knex.raw("uuid_generate_v1mc()"));
      table.string("name");
      table.string("author");
      table.string("slug").unique();
      table.string("cover");
      table.jsonb("links");
      table.timestamp("createdAt").defaultTo(knex.fn.now());
      table.timestamp("updatedAt").defaultTo(knex.fn.now());
    }),
    knex.schema.createTable("reviews", function(table) {
      table.uuid("book_id").references("id").inTable("books").index();
      table.uuid("user_id").references("id").inTable("users").index();
      table.text("content");
      table.primary(["book_id", "user_id"]);
      table.timestamp("createdAt").defaultTo(knex.fn.now());
      table.timestamp("updatedAt").defaultTo(knex.fn.now());
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.raw("DROP TABLE users CASCADE"),
    knex.raw("DROP TABLE books CASCADE"),
    knex.raw("DROP TABLE reviews CASCADE")
  ]);
};
