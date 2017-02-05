const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const port = process.env.PORT || 3000;

const router = require("./router");

app.prepare().then(() => {
  createServer((req, res) => {
    const { pathname } = parse(req.url, true);

    const profileQuery = router.profile.match(pathname);
    if (router.profile.match(pathname)) {
      app.render(req, res, "/profile", profileQuery);
    } else {
      handle(req, res);
    }
  }).listen(port, err => {
    if (err) throw err;
    console.log("> Ready on http://localhost:" + port);
  });
});
