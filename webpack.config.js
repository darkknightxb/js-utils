const path = require("path");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const isProduction = process.env.NODE_ENV === "production";
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.ts",
  output: {
    path: isProduction ? path.resolve(__dirname, "../dist") : undefined,
    filename: "[name].js",
    chunkFilename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    library: {
      type: "module"
    },
    // 指定hash的长度
    hashDigestLength: 8
  },
  experiments: {
    outputModule: true
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
              plugins: [
                "@babel/plugin-transform-runtime",
                !isProduction && "react-refresh/babel"
              ].filter(Boolean),
              cacheDirectory: true,
              cacheCompression: false,
              exclude: [
                /node_modules[\\\/]core-js/,
                /node_modules[\\\/]webpack[\\\/]buildin/
              ]
            }
          },
          {
            loader: "ts-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(),
    !isProduction && new ReactRefreshWebpackPlugin()
  ].filter(Boolean),
  devServer: {
    hot: true,
    port: 1084,
    historyApiFallback: true
  },
  mode: isProduction ? "production" : "development",
  optimization: {
    splitChunks: { chunks: "all" }
  }
};
