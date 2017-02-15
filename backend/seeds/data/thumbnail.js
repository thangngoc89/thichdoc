/*
 * Loop through all images in data set and generate 3x3 gif data 
 * for blur thumbnails
 * https://manu.ninja/dominant-colors-for-lazy-loading-images
 */
const _ = require("lodash");
const data = require("./data.json");
const gm = require("gm").subClass({ imageMagick: true });
const crypto = require("crypto");
const request = require("request");
const fs = require("fs");

const md5 = str => crypto.createHash("md5").update(str).digest("hex");

// Generate a list of images from data
const listOfImage = _.chain(data)
  .flatMap(u => {
    const booksCover = u.books.map(b => b.img);
    return [u.avatar, ...booksCover];
  })
  .value();

const result = {};

const main = async () => {
  try {
    await Promise.all(
      listOfImage.map(url => {
        return new Promise((resolve, reject) => {
          gm(request(url))
            .resize(3, 3)
            .gaussian(3)
            .toBuffer("GIF", function(err, buffer) {
              if (err) {
                console.log("error with ", url);
                reject(err);
              }
              result[md5(url)] = buffer.toString("base64");
              resolve();
            });
        });
      })
    );
    await fs.writeFile("./images.json", JSON.stringify(result, null, 2));
  } catch (err) {
    console.err(err);
  }
};

main();
