// webpack.config.js
const path = require('path');

module.exports = {
  entry: './js/dashboard_main.js',  
  output: {
    filename: 'bundle.js',             // Output bundle filename
    path: path.resolve(__dirname, 'public'), // Output directory
  },
  mode: 'production',
};