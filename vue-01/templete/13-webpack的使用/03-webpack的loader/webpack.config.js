//此处 path 依赖于 node 环境
const path = require("path")

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),   // 通过 node 获得全局路径，并进行拼接
    filename: "bundle.js",
    publicPath: "dist/"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "less-loader" // compiles Less to CSS
        }]
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // 当加载的图片，小于 limit ，图片打包时，会将图片编译为 base64 编码
              // 当加载的图片，大于 limit ，需要使用 file-loader 模块进行加载
              limit: 51200,
              name: "img/[name]-[hash:8].[ext]"
            }
          }
        ]
      }
    ]
  }
}