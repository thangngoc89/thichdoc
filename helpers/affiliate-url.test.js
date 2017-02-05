const affiliateUrl = require("./affiliate-url");

test("return affiliate url with source url encoded", () => {
  const url = "https://tiki.vn/minh-khong-ben-nhau-nua-anh-co-ban-tam-khong-p263171.html";
  const expected = "https://pub.accesstrade.vn/deep_link/4489693559980666127?url=https%3A%2F%2Ftiki.vn%2Fminh-khong-ben-nhau-nua-anh-co-ban-tam-khong-p263171.html&utm_source=thichdoc";
  expect(affiliateUrl(url)).toBe(expected);
});
