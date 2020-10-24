
let name1 = "大宝"

function add1(num1,num2) {
  return num1 + num2;
}

// 导出方式1：对象形式（增强写法）
export { name1, add1 }


// 导出方式2： 定义时直接导出

export let name2 = "小宝"
export function add2(num1,num2) {
  return num1 + num2
}

// 导出方式3： 导出类

export class Person {
  name = "导出类的名字"
  run() {
    console.log("导出类的执行方法")
  }
}

// 导出方式4：导出default  注意：一个 js 文件只能导出 一个 defalult
// 使用该种方式 使用者可以自己命名

let address = "南京市"
function sub(num1,num2) {
  return num1 - num2;
}
// export default address
export default sub

