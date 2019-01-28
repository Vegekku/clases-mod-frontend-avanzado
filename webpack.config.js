const path = require('path');
const htmlPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, 'js/main.js'),
    output: {
        filename: 'test.js',
        path: path.join(__dirname, 'dist'),
    },
    plugins: [
        new htmlPlugin({
            template: 'index.html',
        }),
    ]
};