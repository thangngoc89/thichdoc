const url = require("url");

const affiliateUrl = link => {
  const baseUrl = "https://pub.accesstrade.vn/deep_link/4489693559980666127";
  const parsedUrl = url.parse(baseUrl);
  parsedUrl.query = {
    url: link,
    utm_source: "thichdoc"
  };

  return url.format(parsedUrl);
};

module.exports = affiliateUrl;
