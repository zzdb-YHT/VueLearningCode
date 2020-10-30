// 修改原因： 入口文件一般放在文件夹外面

// 1.使用 commonJs 的模块化规范
const {name1,add,sub} = require("./js/mathUtils")
console.log(name1)
console.log(add(30,20))
console.log(sub(30,20))

// 2.使用 ES6 的模块化规范导入
import {name2,multiply,divide} from "./js/info";
console.log(name2)
console.log(multiply(20,5))
console.log(divide(20,5))

// 引入 css 样式文件
require("./css/normal.css")

// 引入 less 样式文件
require("./css/special.less")
document.writeln("<h2>引入的less文件样式</h2>")

// 引入 Vue
import Vue from 'vue'

//声明组件， 该部分代码被封装到 .vue 文件中
// const cpn = {
//   template:`
//   <div>
//     <h2>{{message}}</h2>
//   </div>
//   `,
//   data() {
//     return {
//       message: "Hello World"
//     }
//   }
// }

// Vue 在解析时，会将 template 中的内容放到 el 指定的 div 中

import Cpn from "./vue/Cpn.vue"

// 从 Cpn.vcue 中引入 Cpn, 注册并使用 Cpn 组件
new Vue({
  el: "#app",
  template: "<Cpn></Cpn>",
  components: {
    Cpn
  }
})