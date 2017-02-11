const express = require("express");
const next = require("next");
const { resolve } = require("path");

const log = s => {
  console.log("=".repeat(10), s, "=".repeat(10));
};

const PORT = process.env.PORT || 3000;
const app = next({
  dev: process.env.NODE_ENV !== "production",
  dir: resolve(__dirname, "src")
});
const handle = app.getRequestHandler();

const ssrCache = new LRUCache({
  max: 100,
  maxAge: 1000 * 60 * 60 // 1hour
})

app.prepare().then(() => {
  const server = express();

  server.use('/static', express.static(resolve(__dirname, "src", "static"), , { maxAge: '365d' }))

  server.get("/u/:username", (req, res) => {
    return renderAndCache(req, res, "/profile", req.params);
  });

  server.get("*", (req, res) => handle(req, res));

  server.listen(PORT, err => {
    if (err) throw err;
    console.log("> Ready on http://localhost:" + PORT);
  });
});

function renderAndCache (req, res, pagePath, queryParams) {
  // If we have a page in the cache, let's serve it
  if (ssrCache.has(req.url)) {
    console.log(`CACHE HIT: ${req.url}`)
    res.send(ssrCache.get(req.url))
    return
  }

  // If not let's render the page into HTML
  app.renderToHTML(req, res, pagePath, queryParams)
    .then((html) => {
      // Let's cache this page
      log(`CACHE MISS: ${req.url}`)
      ssrCache.set(req.url, html)

      res.send(html)
    })
    .catch((err) => {
      app.renderError(err, req, res, pagePath, queryParams)
    })
}