const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/landing_pages/girls/config/index.js",
    js: ['./src/landing_pages/girls/script.js']
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader"
      },
    ]
  },
};
