const path = require("path");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const isDev = process.env.NODE_ENV === "development";

module.exports = {
  entry: "./config/webpack.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    // publicPath: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [MiniCSSExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        type: "asset/resource",
        generator: { filename: "fonts/[name][ext]", publicPath: "/" },
      },
      {
        test: /\.html/,
        type: "asset/resource",
        generator: { filename: "[name][ext]" },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".scss"],
  },
  plugins: [new MiniCSSExtractPlugin()],
  watch: isDev,
};
