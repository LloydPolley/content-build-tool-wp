const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/landing_pages/women/config/index.js",
    js: ['./src/landing_pages/women/script.js']
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
