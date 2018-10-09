const path = require('path');
const stylus = require('stylus');

module.exports = {
    entry: [
        './src/YoRHa.theme.styl'
    ],
    output: {
        filename: '[name].css',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.styl$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'stylus-loader',
                        options: {
                            use: [stylus()]
                        }
                    }
                ]
            }
        ]
    }
};
