const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    main: {
      import: "./src/index.js",
      dependOn: "shared"
    },
    another: {
      import: "./src/another_module.js",
      dependOn: "shared"
    },
    shared: "lodash"
  },
  output: {
    filename: "[name].bundle.[contentHash].js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource"
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource"
      },
      {
        test: /\.(csv|tsv)$/i,
        use: ["csv-loader"]
      },
      {
        test: /\.xml$/i,
        use: ["xml-loader"]
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin(), new CleanWebpackPlugin()],
  mode: "production"
};
