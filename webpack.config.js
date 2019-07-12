var debug = process.env.NODE_ENV !== 'production';
var webpack = require('webpack');


module.exports = {
    context: __dirname,
    devtool: debug ? 'inline-sourcemap' : null,
    mode: debug ? 'development' : 'production',
    entry: './assets/components/blocks.js',
    output: {
        path: __dirname + '/assets/dist/',
        filename: 'components.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/, /assets\/dist/, /assets\/src/],
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            }
        ]
    }
};