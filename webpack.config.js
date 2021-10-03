const path = require("path");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const isDev = process.env.NODE_ENV === "development";

console.log(path.relative(__dirname, "./"));

const getCSSUrlPath = (path) => {
  if (path.match("fonts")) {
    const directorySplit = path.split("/");
    const file = directorySplit[directorySplit.length - 1];
    return `/fonts/${file}`;
  }

  return path;
};

module.exports = {
  entry: "./config/webpack.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [
          MiniCSSExtractPlugin.loader,
          { loader: "css-loader" },
          { loader: "resolve-url-loader", options: { sourceMap: true } },
          { loader: "sass-loader", options: { sourceMap: true } },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        type: "asset/resource",
        generator: {
          filename: "fonts/[name][ext]",
        },
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
