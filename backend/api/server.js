import express from "express";
import graphqlServer from "./";
import morgan from "morgan";
import bodyParser from "body-parser";
const PORT = 4000;

const app = express();

/*
 * Use this server in development mode only 
 * API server will be mounted to the main express instance with next.js
 * 
 * This server allows restarting express server without restarting next.js 
 * (which is painfully slow)
 */
app.use(bodyParser.json());
app.use(morgan(":method :url :status :response-time ms"));
graphqlServer(app);
app.listen(PORT, "0.0.0.0", err => {
  if (err) throw err;
  console.log("Development API server is listen on: http://localhost:" + PORT);
});
