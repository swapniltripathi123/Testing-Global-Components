const path = require('path');

module.exports = {
  entry: './src/index.js', // Adjust the entry path
  output: {
    path: path.resolve(__dirname, 'dist'), // Adjust the output path
    filename: 'globalComponents.js', // Adjust the output filename
    library: 'MY-REACT-LIBRARY', // Replace with your library's global variable name
    libraryTarget: 'umd',
  },
  mode: 'development', // or 'production'
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
