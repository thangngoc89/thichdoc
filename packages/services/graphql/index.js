const server = require("graphql-server-lambda");
const schema = require("./schema");

server.graphqlLambda({ schema, context: {} });
// module.exports.graphiql = server.graphqilLambda({ endpointURL: "/graphql" });
