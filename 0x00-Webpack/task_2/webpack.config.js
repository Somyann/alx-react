// webpack.config.js
const path = require('path');

module.exports = {
  entry: './js/dashboard_main.js',  
  output: {
    filename: 'bundle.js',             // Output bundle filename
    path: path.resolve(__dirname, 'public'), // Output directory
  },
  mode: 'production',
  module: {
    rules: [
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
        },
        {
            test: /\.(png|jpg|gif|svg)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]',
                        outputPath: 'assets/', // Ensure this matches your assets structure
                    },
                },
                {
                    loader: 'image-webpack-loader',
                    options: {
                        mozjpeg: {
                            progressive: true,
                            quality: 65,
                        },
                        pngquant: {
                            quality: [0.65, 0.90],
                            speed: 4,
                        },
                        gifsicle: {
                            interlaced: false,
                        },
                        webp: {
                            quality: 75,
                        },
                    },
                },
            ],
        },
    ],
},
};
