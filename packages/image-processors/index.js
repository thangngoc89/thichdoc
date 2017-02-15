const http = require("http");
const gm = require("gm").subClass({ imageMagick: true });
const request = require("request");
const url = require("url");

http
  .createServer(function(req, res) {
    const { query } = url.parse(req.url, true);
    res.setHeader("Content-Type", "image/jpeg");

    const header = new Buffer("474946383961", "hex");
    const logicalScreenDescriptor = new Buffer("01000100800100", "hex");
    const imageDescriptor = new Buffer("2c000000000100010000", "hex");
    const imageData = new Buffer("0202440100", "hex");
    // https://manu.ninja/dominant-colors-for-lazy-loading-images
    gm(request(query.url)).resize(3, 3).gaussian(3).stream().pipe(res);
  })
  .listen(5000);
