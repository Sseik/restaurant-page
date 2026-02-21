import path from "node:path";
import HTMLWebpackPlugin from "html-webpack-plugin";
import { watchFile } from "node:fs";
import { clear } from "node:console";

export default {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(import.meta.dirname, "dist"),
    clean: true,
  },
  devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/template.html"],
  },
  plugins: [new HTMLWebpackPlugin("./src/template.html")],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i,
        use: ["html-loader"],
      },
      {
        test: /\.()$/i,
        type: "asset/resource",
      },
    ],
  },
};
