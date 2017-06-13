/* eslint-env node */

const path = require("path");

module.exports = {
    context: path.join(__dirname, "src"),
    entry: {
        main: "./js/main.js",
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "build")
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: ["babel-loader"]
            }
        ]
    },
    devtool: "source-map",
    devServer: {
        contentBase: __dirname
    }
};