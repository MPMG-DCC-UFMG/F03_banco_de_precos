"use strict";

const webpack = require('webpack');
const env = require('yargs').argv.mode;
console.log("Environment: ", env);
const debug = (env === 'dev');

module.exports = {
    devServer: {
        inline: true,
        port: 8000
    },
    entry: './src/demo/index.jsx',
    output:
        {path: "./dev/", publicPath: "/assets/", filename: 'app.bundle.js'}
       ,
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react', 'stage-0'],
                    plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
                }
            }
            ,
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.png$/,
                loader: "url-loader?limit=100000"
            },
            {
                test: /\.jpg$/,
                loader: "file-loader"
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/octet-stream'
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=image/svg+xml'
            }
        ]
    },
    plugins: debug ? [] : [
            new webpack.optimize.DedupePlugin(),
            new webpack.optimize.OccurenceOrderPlugin(),
            new webpack.optimize.UglifyJsPlugin({
                sourcemap: false,
                compress: {
                    warnings: false
                },
                output: {
                    comments: false
                }
            }),
            new webpack.DefinePlugin({
                "process.env": {
                    NODE_ENV: JSON.stringify("production")
                }
            })
        ]
};