  const path = require('path');
  const HtmlWebpackPlugin = require('html-webpack-plugin');
  const { CleanWebpackPlugin } = require('clean-webpack-plugin');

  module.exports = {
    entry: {
      app: './src/index.js',
      print: './src/print.js'
    },
    devtool: 'inline-source-map', //出错精确显示文件名
    devServer: {
      contentBase: './dist',
      port: 8000,
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({ // 自动生成html
        title: 'Development'
      })
    ],
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
    }
  };