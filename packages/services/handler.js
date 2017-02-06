"use strict";

const server = require("graphql-server-lambda");
const schema = require("./graphql/schema");

module.exports.graphql = server.graphqlLambda({ schema });
