const path = require('path')

const { merge } = require('webpack-merge')
const webpackConfig = require('./webpack.config.js')


module.exports = merge(webpackConfig, {
    mode: 'production',
    output: {
        path: path.join(__dirname, '/dist'),
        publicPath: '/',
        filename: 'bundle.js'
    }
})