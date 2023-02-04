const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/javascript/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
            filename: 'images/[name][ext]'
        }
      },
    ],
    
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, './src/template.html')
    })
  ]
};