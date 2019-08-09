const path = require('path');

module.exports = {
  // 入口
  entry: './src/index.js',
  // 输出
  output: {
    filename: 'webpack-out.js', // 输出文件名
    path: path.resolve(__dirname, 'dist') // 输出文件夹
  },
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
  }
};