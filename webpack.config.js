const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = env => {
    const isProduction = env ? env.prod : false;

    return {
        context: path.join(__dirname, "src"),
        entry: './index.js',
        mode: isProduction ? "production" : "development",
        devtool: isProduction ? "none" : "source-map",

        resolve: {
            extensions: [".js", ".jsx"]
        },

        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    loader: "babel-loader",
                    exclude: /node_modules/
                },
                {
                    test: /\.(ttf|eot|svg|woff|png|jpg)$/,
                    loader: "file-loader",
                    options: {
                        name: "[path][name].[ext]?[hash]"
                    }
                },
                {
                    test: /\.css$/,
                    use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
                }
            ]
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

        devServer: {
            contentBase: path.resolve(__dirname, "dist"),
            historyApiFallback: true,
        },

        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, "dist"),
            publicPath: "/",
        }
    };
};