// 前端开发通常会引入较多的 js 文件
// 问题1：各个js文件之间 定义的变量 存在命名冲突 —— es5 的变量定义无作用域
// 问题2：定义变量的使用强烈依赖js文件的引入顺序，当有命名冲突时，引入顺序不对，可能导致程序出错

// 问题1 可以使用 闭包函数 处理，但使得其中定义的变量和方法无法在外部使用
// 解决：es5 可以使用 闭包函数 加 导出的 方式 解决以上问题

const moduleA = (function () {

  //导出的对象
  var obj = {};
  var name = "小明";

  function add(sum1,sum2) {
    return sum1 + sum2;
  }

  obj.name = name;
  obj.add = add;

  return obj;

})()

