/**
 * Get initial data for importing from Tiki
 */
const got = require("got");
const cheerio = require("cheerio");
const fs = require("mz/fs");

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

const cleanUpComment = comment => {
  if (typeof comment !== "string") {
    return comment;
  }
  return comment.replace(/(\n|\t)/g, "");
};

async function main() {
  try {
    const { body } = await Promise.resolve(got(prodUrl));
    const $ = cheerio.load(body);

    $(".tacgia__line-wr").each(function() {
      const avatar = $(this).find("img.tacgia__line-photo").data("original");
      if (typeof avatar === "undefined") {
        return;
      }
      const name = $(this).find("p > strong.ribbon-content").text();
      const bio = $(this).find("p.tacgia__line-desc").text();
      const tikiLink = $(this).find("a.tacgia__line-more").attr("href");
      const recommendations = [];
      const books = $(this)
        .find(".tacgia__line-right > .tacgia__book-item")
        .each(function() {
          recommendations.push({
            img: $(this).find("img.tacgia__book-img").data("original"),
            link: $(this).find("a.book_item-buy").attr("href"),
            name: $(this).find(".tacgia__book-name").text(),
            author: $(this).find(".tacgia__book-author").text(),
            comment: cleanUpComment(
              $(this).find(".book__comment > .comment-content").text()
            )
          });
        });
      const user = {
        name,
        avatar,
        bio,
        tikiLink,
        books: recommendations
      };
      data.push(recursiveTrim(user));
    });
    await fs.writeFile("./data.json", JSON.stringify(data, null, 2));
  } catch (err) {
    console.error(err);
  }
}

main();
