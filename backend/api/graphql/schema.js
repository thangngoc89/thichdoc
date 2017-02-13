import { makeExecutableSchema } from "graphql-tools";
import { readFileSync } from "fs";
import resolvers from "./resolvers";

const schema = readFileSync(__dirname + "/schema.gql").toString();

export default makeExecutableSchema({
  typeDefs: schema,
  resolvers
});
