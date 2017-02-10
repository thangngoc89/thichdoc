const express = require("express");
const bodyParser = require("body-parser");
const { graphqlExpress } = require("graphql-server-express");
const server = require("graphql-server-lambda");
const schema = require("../graphql/schema");

const PORT = 3000;

var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "https://thichdoc.com");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/graphql", bodyParser.json(), graphqlExpress({ schema }));
app.listen(PORT);
