const path = require("path");
const webpack = require("webpack");
const DEVELOPMENT = process.env.NODE_ENV === "development";
const PRODUCTION = process.env.NODE_ENV === "production";
const PUBLIC_PATH = "/static/frontend";
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./static/frontend"),
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  optimization: {
    minimize: true,
  },
  devServer: {
    port: 8080,
    publicPath: PUBLIC_PATH,
    inline: true,
    hot: true,
    historyApiFallback: true,
  },

  plugins: [
    new webpack.DefinePlugin({
      "process.env.PRODUCTION": JSON.stringify(PRODUCTION),
      "process.env.DEVELOPMENT": JSON.stringify(DEVELOPMENT),
    }),
  ],
};
