const path = require('path');

module.exports = {
  // 入口
  entry: './src/index.js',
  // 输出
  output: {
    filename: 'webpack-out2.js', // 输出文件名
    path: path.resolve(__dirname, 'dist') // 输出文件夹
  },
  
};