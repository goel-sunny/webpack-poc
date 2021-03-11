const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/components/side-panel.jsx",
  output: {
    filename: "SidePanel.js",
    path: path.resolve("lib"),
    libraryTarget: "commonjs2"
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
      },
      {
        test: /\.(jsx)$/,
        exclude: /(node_modules)/,
        use: "babel-loader"
      }
    ]
  },
  plugins: [new CleanWebpackPlugin()],
  mode: "production"
};
