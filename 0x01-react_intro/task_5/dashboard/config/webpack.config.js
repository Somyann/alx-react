const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Replaces contentBase with static.directory
    },
    hot: true,     // Enable hot module replacement
    open: true,    // Automatically open the browser
  },
  module: {
    rules: [
      {
        test: /\.css$/,           // CSS loader
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,  // Image loaders
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images',
            },
          },
          'image-webpack-loader',   // Image optimization loader
        ],
      },
    ],
  },
};
