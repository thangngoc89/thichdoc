import { graphqlExpress, graphiqlExpress } from "graphql-server-express";
import bodyParser from "body-parser";
import schema from "./graphql/schema";

// Mounting an express app on the fly
export default function(app) {
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

  app.options("/graphql", function(req, res) {
    res.sendStatus(200);
    res.end();
  });
  app.use("/graphql", graphqlExpress({ schema }));

  app.use(
    "/graphiql",
    graphiqlExpress({
      endpointURL: "/graphql",
      query: (
        `
        allUsers(first: 10, skip: 10) {
          id
          name
        }
      `
      )
    })
  );
}
