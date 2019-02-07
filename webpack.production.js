const path = require('path');
const webpack = require('webpack');
const htmlPlugin = require('html-webpack-plugin'); // empaquetador de HTML
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');

const srcDir = 'src';

module.exports = {
    mode: 'production',
    entry: path.join(__dirname, srcDir, 'main.js'), // src/main.js
    output: {
        // name: name of entry point file
        filename: '[name]-[hash].js',
        path: path.join(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [ 
                    // 'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader', //permite usar plugin de la comunidad postcss, como autoprefixer
                    'sass-loader',
                ],
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                // test: /assets\/.*/,
                test: /\.(jpg|png|jpeg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets/img',
                        },
                    }
                ],
            }
        ],
    },
    plugins: [
        new webpack.ProgressPlugin(), //para tener feedback del proceso
        new cleanWebpackPlugin(['dist']), //borra dist antes de cada compilación
        new htmlPlugin({
            template: path.join(__dirname, srcDir, 'index.html'),
            minify: true,
            // minify: {
            //     collapseWhitespace: true,
            //     removeComments: true,
            //     removeRedundantAttributes: true,
            //     removeScriptTypeAttributes: true,
            //     removeStyleLinkTypeAttributes: true,
            //     useShortDoctype: true
            // }
        }),
        new MiniCssExtractPlugin(),
    ],
};