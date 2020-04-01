const path = require("path");
const merge = require("webpack-merge");
const common = require(path.resolve("./webpack/webpack.common"));
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  entry: {
    main: path.resolve(__dirname, "../config/index.js"),
    js: path.resolve(__dirname, "../script.js")
  },
  output: {
    filename: "[name].[contentHash].bundle.js",
    path: path.resolve(__dirname, "../dist")
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
          "postcss-loader"
        ]
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  },
  optimization: {
    minimizer: [
      new HtmlWebpackPlugin({
        template: "./external/template.html",
        minify: {
          removeAttributesQuotes: true,
          collapseWhitespace: true,
          removeComments: true
        }
      }),
      new UglifyJsPlugin()
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "[name].css" }),
    new CleanWebpackPlugin()
  ]
});
