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
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        },
        use: [
          {
            loader: 'image-webpack-loader',   // Image optimization loader
            options: {
              bypassOnDebug: true,            // Use optimization in production only
              disable: true,                  // Disable during development for faster builds
            },
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,  // Babel loader for JavaScript and JSX
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  }
};
