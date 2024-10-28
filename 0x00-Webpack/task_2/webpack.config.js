const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './js/dashboard_main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
    clean: true,
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/,                  // Match .css files
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,    
        use: [
          {
            loader: 'file-loader',       // Use file-loader for image files
            options: {
              name: '[name].[ext]',
              outputPath: 'images',      // Output directory for images
            },
          },
          {
            loader: 'image-webpack-loader', // Optimize images
            options: {
              mozjpeg: { progressive: true },
              optipng: { enabled: true },
              pngquant: { quality: [0.65, 0.90], speed: 4 },
              gifsicle: { interlaced: false },
              webp: { quality: 75 },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      templateContent: `
      `,
    }),
  ],
  performance: {
    hints: false,                        // Disable asset size limit warnings
  },
};
