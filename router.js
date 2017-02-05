const Route = require("route-parser");

const profile = new Route("/u/:user_name");

module.exports = {
  profile
};
