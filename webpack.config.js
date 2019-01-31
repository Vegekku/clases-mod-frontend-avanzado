const path = require('path');
const htmlPlugin = require('html-webpack-plugin'); // empaquetador de HTML

const srcDir = 'src';

module.exports = {
    // devtool: 'eval',
    // debug: true,
    // devtool: 'source-map',
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
            }
        ],
    },
    plugins: [
        new htmlPlugin({
            template: path.join(__dirname, srcDir, 'index.html'),
        }),
    ]
};