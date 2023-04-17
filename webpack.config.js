const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {

    entry: './src/index.tsx',

    module: {
        rules: [
            {
                test: /.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: ['ts-loader']
            }
        ]
    },
    devServer: {
        port: 3000,
        historyApiFallback: true,
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js']
    },

    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html'
        })
    ]
}