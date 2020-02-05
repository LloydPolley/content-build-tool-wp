const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "[name].[contentHash].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader", "postcss-loader"]
      }
    ]
  },
  optimization: {
    minimizer: [
      new HtmlWebpackPlugin({
        template: "./src/template.html",
        minify: {
          removeAttributesQuotes: true,
          collapseWhitespace: true,
          removeComments: true
        }
      })
    ]
  },
  plugins: [new MiniCssExtractPlugin({filename: "style.css"}), new CleanWebpackPlugin()]
});
