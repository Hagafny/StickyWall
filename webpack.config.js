const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './client/src/index.html',
    filename: 'index.html',
    inject: 'body'
})
module.exports = {
    entry: './client/src/index.jsx',
    output: {
        path: path.resolve('client/dist'),
        filename: 'app.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/, loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },
    plugins: [HtmlWebpackPluginConfig]
}