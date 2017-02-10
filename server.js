const express = require("express");
const netjet = require("netjet");
const next = require("next");
const { resolve } = require("path");

const log = s => {
  console.log("=".repeat(10), s, "=".repeat(10));
};

const PORT = process.env.PORT || 3000;
log(PORT);
log(process.env.PORT);
const app = next({
  dev: process.env.NODE_ENV !== "production",
  dir: resolve(__dirname + "/src")
});
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.use(
    netjet({
      cache: "max"
    })
  );
  server.get("/u/:username", (req, res) => {
    return app.render(req, res, "/profile", req.params);
  });

  server.get("*", (req, res) => handle(req, res));

  server.listen(3000, err => {
    if (err) throw err;
    console.log("> Ready on http://localhost:3000");
  });
});
