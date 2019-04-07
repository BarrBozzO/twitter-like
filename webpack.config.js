const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.bundle.js"
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: "babel-loader" },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      { test: /\.svg/, use: "svg-url-loader" }
    ]
  },
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  devServer: {
    historyApiFallback: true
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })]
};
