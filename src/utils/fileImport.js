const path = require("path");
const fs = require("fs");

module.exports = {
  fileImport: (url) => fs.readFileSync(
    path.join(__dirname, url),
    "utf-8"
  )
};
