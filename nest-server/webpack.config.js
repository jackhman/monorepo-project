const path = require("path")
const webpack = require("webpack")
const CopyPlugin = require("copy-webpack-plugin")
module.exports = {
  entry: "./src/main.ts",
  watch: true,
  target: "node",
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  mode: "development",
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "../shared"),
          to: "shared"
        }
      ]
    })
  ],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "main.js"
  }
}
