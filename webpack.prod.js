const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const CompressionPlugin = require('compression-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: "./build",
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            },
            {
                test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
                loaders: ['file-loader']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new UglifyJsPlugin(),
        new CompressionPlugin()
    ]
};

