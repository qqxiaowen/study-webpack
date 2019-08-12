## webpack.config.js 的配置

* entrty 为文件的入口文件

> 在 output 对象下：
* filename 为输出文件名
* path 为输出文件夹的路径以及名称（注：使用绝对路径）

* devtool: 'inline-source-map': 打包后出错的文件也能精确定位到是打包之前的哪个文件出的错。

> 在 plugins 对象下:
* new HtmlWebpackPulugin方法： 自动生成html文件，接收一个对象，可设置具体html的内容。需要使用npm安装依赖包。
* new CleanWebpackPlugin方法： 自动清理某文件夹。需要使用npm安装依赖包。

> 在 module 对象下：
* rules 数组接收多个对象，每个对象有 test 和 use 属性，分别为文件的检索 和 文件的加载loader.

* 在 devServer 对象下，可以设置 contentBase 和 port 等属性，分别为webpack开发服务器的文件路径 和 端口号。 下载 webpack-dev-server 包，并在 package.json 中设置 start: 'webpack-dev-server --open'，即可通过 npm start 自动启动server服务并且热更新。

## package.json 的配置

> 在 scripts 对象下：
* 添加 build: 'webpack' 可使用 npm run build， webpack自动查找webpack.config.js文件，并启动它。
* 添加 watch: 'webpack --watch' 可使用 npm run watch， webpack将启动并监听除webpack.config.js文件之外的文件变化，若发生变化，则自动打包文件。 