const path = require('path');
const webpack = require('webpack');
const htmlPlugin = require('html-webpack-plugin'); // empaquetador de HTML

const srcDir = 'src';

module.exports = {
    // Buena práctica: tener un webpack.common con configuración comun a prod y dev
    // ...common,
    // devtool: 'eval',
    // debug: true,
    devtool: 'source-map',
    mode: 'development',
    entry: path.join(__dirname, srcDir, 'main.js'), // src/main.js
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [ // se usan de derecha a izquierda, o de abajo a arriba
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ]
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
                        options: {},
                    }
                ]
            }
        ],
    },
    plugins: [
        new htmlPlugin({
            template: path.join(__dirname, srcDir, 'index.html'),
        }),
        new webpack.HotModuleReplacementPlugin(), //para recargar en caliente
    ],
    devServer: { // https://webpack.js.org/configuration/dev-server/
        open: true, // Tells dev-server to open the browser after server had been started
        overlay: true, // Shows a full-screen overlay in the browser when there are compiler errors or warnings
        port: 3000, // Specify a port number to listen for requests on
        hot: true, // Enable webpack's Hot Module Replacement feature (webpack.HotModuleReplacementPlugin is required)
        contentBase: [ // Tell the server where to serve content from
            path.join(__dirname, 'src'),
            path.join(__dirname, 'src', 'templates'),
        ], 
        watchContentBase: true, // Tell dev-server to watch the files served by the devServer.contentBase option
        // https: true,
    },
};