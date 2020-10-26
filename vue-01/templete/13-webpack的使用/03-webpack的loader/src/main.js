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