const path = require('path');

module.exports = {
  entry: './src/globalComponents/Button/index.js', // Adjust the entry path
  output: {
    path: path.resolve(__dirname, 'dist'), // Adjust the output path
    filename: 'index.js', // Adjust the output filename
    libraryTarget: 'commonjs2',
  },
 // mode: 'development', // or 'production'
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['@babel/preset-env'],
//           },
//         },
//       },
//     ],
//   },
// };



module: {
  rules: [
    {
      test: /\.js$/,
      include: path.resolve(__dirname, 'src'),
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
            presets: ['env'],
          },
        },
      },
    ],
  },
  externals: {
    'react': 'commonjs react'
  }
}