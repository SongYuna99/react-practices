const path = require("path");

module.exports = {
  mode: "developement",
  entry: path.resolve("src/index.js"),
  output: {
    path: path.resolve("public"),
    filename: "assets/js/bundle.js",
  },
};
