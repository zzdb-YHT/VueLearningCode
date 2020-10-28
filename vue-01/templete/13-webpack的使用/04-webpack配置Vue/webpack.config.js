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
      // 打包 css 配置
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },

      // 打包 less 配置
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

      // 打包图片配置
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
      },
      // 转 es5 的配置
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      }
    ]
  },

  // 使用Vue的配置，设置为 runtime-complier 版本，允许代码中有 template， 可以编译
  resolve: {
    alias: {
      "vue$": "vue/dist/vue.esm.js"
    }
  }
}