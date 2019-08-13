const path = require('path');
const HtmlWebpackplugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './app.js',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    port: 8000,
  },
  plugins: [
    new HtmlWebpackplugin({
      filename: 'index.html',
      template: './public/index.html'
    }),
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      }
    ]
  },
  output: {
    filename: 'webpack.js',
    path: path.resolve(__dirname, 'dist')
  }
};