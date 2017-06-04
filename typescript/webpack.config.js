var path = require('path');

module.exports = {
  entry: './js/app.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'js')
  }
};