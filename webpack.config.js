const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const baseUrl = "./src/client/js/";

module.exports = {
  entry: {
    main: baseUrl + "main.js",
    installer: baseUrl + "installer.js",
    register: baseUrl + "register.js",
    comment: baseUrl + "comment.js",
    rank: baseUrl + "rank.js",
    page: baseUrl + "page.js",
    search: baseUrl + "search.js",
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/styles.css",
    }),
  ],
  output: {
    filename: "js/[name].js",
    path: path.resolve(__dirname, "asset", "js"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
};
