const { default: optimizer } = require("../../tachyons-build/index");
const { resolve } = require("path");
optimizer(
  resolve(__dirname, "../src/components/**.js"),
  resolve(__dirname, "../src/static/css/tachyons.min.css"),
  resolve(__dirname, "../src/static/css/output.css")
);
