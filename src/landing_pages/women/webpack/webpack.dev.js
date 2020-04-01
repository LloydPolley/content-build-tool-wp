const path = require("path");
const merge = require("webpack-merge");
const common = require(path.resolve("./webpack/webpack.common"));
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  entry: {
    main: path.resolve(__dirname, "../config/index.js"),
    js: path.resolve(__dirname, "../script.js"),
    cmsEntry: path.resolve(__dirname, "../config/imports.js")
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader", "postcss-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./external/template.html"
    })
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  }
});
