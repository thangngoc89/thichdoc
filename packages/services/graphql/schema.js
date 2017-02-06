const { makeExecutableSchema } = require("graphql-tools");
const { readFileSync } = require("fs");
const resolvers = require("./resolvers");

const schema = readFileSync(__dirname + "/schema.gql").toString();

module.exports = makeExecutableSchema({
  typeDefs: schema,
  resolvers
});
