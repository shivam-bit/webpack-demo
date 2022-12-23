const path = require("path");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const mode =
  process.env.NODE_ENV === "production" ? "production" : "development";

module.exports = {
  mode: mode,
  output:{
    assetModuleFilename:"images/[hash][ext][query]"
  },
  module: {
    rules: [
        {
            test:/\.(png|jpg?g|gif|svg)$/i,
            type:"asset"
        },
      {
        test: /\.s?css$/i,
        use: [
          miniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [new miniCssExtractPlugin()],
  resolve:{
    extensions:[".js",".jsx"]
  },
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    hot: true,
  },
};
