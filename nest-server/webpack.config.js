const path = require("path")
const webpack = require("webpack")
const CopyPlugin = require("copy-webpack-plugin")

const sharedDirPath = path.resolve(__dirname, "../shared")

module.exports = {
  entry: "./src/main.ts",
  target: "node",
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: ["file-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "@shared": sharedDirPath
    }
  },
  mode: "development",
  devServer: {
    hot: true
  },
  optimization: {
    concatenateModules: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: sharedDirPath,
          to: "shared"
        },
        {
          from: path.resolve(__dirname, "./public"),
          to: "static",
          noErrorOnMissing: true
        }
      ]
    })
  ],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "main.js"
  }
}
