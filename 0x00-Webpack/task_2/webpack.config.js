const path = require('path');

module.exports = {
  entry: './js/dashboard_main.js',  // Entry point for the application
  output: {
    filename: 'bundle.js',           // Output bundle filename
    path: path.resolve(__dirname, 'public'), // Output directory
    clean: true,
  },
  mode: 'production', 
  module: {
    rules: [
      {
        test: /\.js$/,               // Transpile .js files
        exclude: /node_modules/,     // Exclude node_modules
        use: {
          loader: 'babel-loader',    // Use Babel to transpile JavaScript
          options: {
            presets: ['@babel/preset-env'], // Use the env preset
          },
        },
      },
      {
        test: /\.css$/,              // Process .css files
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i, // Optimize images
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.js'],             // Resolve .js files
  },
};