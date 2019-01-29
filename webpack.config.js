const path = require('path');
const htmlPlugin = require('html-webpack-plugin');

const srcDir = 'src';

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, srcDir, 'js/main.js'), // src/js/main.js
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist'),
    },
    plugins: [
        new htmlPlugin({
            template: path.join(__dirname, srcDir, 'index.html'),
        }),
    ]
};