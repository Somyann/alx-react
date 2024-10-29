const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        header: './modules/header/header.js',
        body: './modules/body/body.js',
        footer: './modules/footer/footer.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'public'), // Output to public folder
        clean: true,
    },
    devtool: 'inline-source-map', // Enable source maps
    devServer: {
        static: './public',
        port: 8564,
        open: true,
    },
    plugins: [
        new CleanWebpackPlugin(), // Clean build folder on each build
        new HtmlWebpackPlugin({
            title: 'Holberton Dashboard',
            template: './modules/index.html',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
        ],
    },
    optimization: {
        splitChunks: {
            chunks: 'all', // Split all chunks
        },
    },
};
