const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

//webpack Hot Module Replacement
const hotReloadPlugin = new webpack.HotModuleReplacementPlugin();

//generates html file with webpack generated js bundles included as script tags
const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

//extracts css in to a separate css file
const cssPlugin = new MiniCssExtractPlugin({
  filename: "[name].css",
  chunkFilename: "[id].css"
});

module.exports = {
  entry: "./src/app.js", //specify a different entry file
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [ "babel-loader" ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [ hotReloadPlugin, htmlPlugin, cssPlugin ],
  devServer: {
    contentBase: "./dist",
    hot: true //enable Hot Module Replacement
  }
};
