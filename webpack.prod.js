const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const {InjectManifest} = require('workbox-webpack-plugin');
// const WorkboxPlugin = require('workbox-webpack-plugin');

// const PUBLIC_PATH = 'https://movie-club.netlify.com/';

module.exports = {
    devtool: 'source-map',
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "/build"),
        filename: "[name]-[hash].js",
        publicPath: '/'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-react']
                }
            }
        }, {
            test: /\.css$/,
            use: [
                {
                  loader: MiniCssExtractPlugin.loader,
                  options: {
                    publicPath: '../',
                    hmr: process.env.NODE_ENV === 'development',
                  },
                },
                {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        localIdentName: "[name]__[local]___[hash:base64:5]"
                    }
                },
              ],
        },
        {
            test: /\.(png|jpg|gif)$/,
            use: [
                {
                    loader: 'file-loader'
                }
            ]
        }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            hash: true,
            filename: "index.html",  //target html
            template: "./src/index.html" //source html
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
        new CopyPlugin([
            { from: 'src/images', to: './images' },
            { from: 'src/manifest.json', to: './' },
          ]),
        new InjectManifest({
            swSrc: './src/sw.js',
        })
    ]
}
