/**
 * Get initial data for importing from Tiki
 */
const got = require("got");
const cheerio = require("cheerio");

const devUrl = "http://localhost:8080/tiki.html";
const prodUrl = "https://tiki.vn/nguoi-noi-tieng-doc-gi";

const url = devUrl;

const data = [];
const recursiveTrim = data => {
  const result = {};

  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const node = data[key];
      if (typeof node === "string") {
        result[key] = node.trim();
      } else if (typeof node === "array") {
        result[key] = node.map(k => k.trim());
      } else {
        result[key] = node;
      }
    }
  }
  return result;
};

async function main() {
  try {
    const { body } = await Promise.resolve(got(prodUrl));
    const $ = cheerio.load(body);

    $(".tacgia__line-wr").each(function(i, elem) {
      console.log($(this).html());
      process.exit(1);
      const avatar = $(this).find("img.tacgia__line-photo").data("original");
      if (typeof avatar === "undefined") {
        return;
      }
      const author = $(this).find("p > strong.ribbon-content").text();
      const bio = $(this).find("p.tacgia__line-desc").text();
      const tikiLink = $(this).find("a.tacgia__line-more").attr("href");
      const user = {
        avatar,
        author,
        bio,
        tikiLink
      };
      data.push(recursiveTrim(user));
    });
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

main();
