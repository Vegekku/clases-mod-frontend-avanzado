const path = require('path');
const htmlPlugin = require('html-webpack-plugin'); // empaquetador de HTML

const srcDir = 'src';

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, srcDir, 'main.js'), // src/js/main.js
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [ // se usan de derecha a izquierda, o de abajo a arriba
                    'style-loader', // procesar el import
                    'css-loader' // entender el import
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