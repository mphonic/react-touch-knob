const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'dist');
const APP_DIR = path.resolve(__dirname, 'lib');


const config = {
    entry: APP_DIR + '/react-touch-knob.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'index.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                include: APP_DIR,
                loader: 'babel-loader'
            }
        ]
    }
};

module.exports = config;