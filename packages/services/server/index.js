const express = require("express");
const bodyParser = require("body-parser");
const { graphqlExpress } = require("graphql-server-express");
const server = require("graphql-server-lambda");
const schema = require("../graphql/schema");

const PORT = 3000;

var app = express();

app.use("/graphql", bodyParser.json(), graphqlExpress({ schema }));
app.listen(PORT);
