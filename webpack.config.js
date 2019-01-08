const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = function (env, options) {
  const isProduction = env === "prod";

  const config = {
    context: path.join(__dirname, "src"),
    entry: "./",
    mode: isProduction ? "production" : "development",
    devtool: isProduction ? "none" : "source-map",
    
    resolve: {
      extensions: [".js", ".jsx"]
    },

    optimization: isProduction ? {
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          sourceMap: true
        }),
        new OptimizeCSSAssetsPlugin({})
      ]
    } : {},

    module: {
      rules: [
      {
        test: /\.js|jsx$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader"
        ]
      },
      ],
    },

  plugins: [
      new HtmlWebpackPlugin({
        title: "ReactJS App",
        hash: true,        
        minify: isProduction ? {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true
        } : {} ,
        template: path.resolve(__dirname, "./src/index.html")
      }),
      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css"
      })
    ],

    devServer: {
      contentBase: "./dist"
    }
  };

  return config;
};
