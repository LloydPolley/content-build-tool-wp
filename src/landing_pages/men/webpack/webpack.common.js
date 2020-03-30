const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/landing_pages/men/config/index.js",
    js: ['./src/landing_pages/men/script.js']
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
