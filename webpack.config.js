const path = require('path');

module.exports = {
    entry: './dist/index.js',
    mode: 'production',
    output: {
        filename: 'key-names.min.js',
        path: path.resolve(__dirname, 'dist/browser'),
        library: 'KeyNames',
        libraryTarget: 'umd',
        umdNamedDefine: true,
        auxiliaryComment: 'Convert key codes to easily readable names.',
    },
    devServer: {
        compress: true,
        port: 9000,
    },
};