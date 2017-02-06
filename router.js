const Route = require("route-parser");

const profile = new Route("/u/:username");

module.exports = {
  profile
};
