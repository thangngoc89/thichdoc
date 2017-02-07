const { createServer } = require("http");
const { parse } = require("url");
const { resolve } = require("path");
const next = require("next");
const router = require("./router");

const PORT = process.env.PORT || 3000;

const app = next({
  dev: process.env.NODE_ENV !== "production",
  dir: resolve(__dirname + "/src")
});
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    const { pathname } = parse(req.url, true);

    const profileQuery = router.profile.match(pathname);
    if (profileQuery) {
      app.render(req, res, "/profile", profileQuery);
    } else {
      handle(req, res);
    }
  }).listen(PORT, err => {
    if (err) throw err;
    console.log("> Ready on http://localhost:" + PORT);
  });
});
