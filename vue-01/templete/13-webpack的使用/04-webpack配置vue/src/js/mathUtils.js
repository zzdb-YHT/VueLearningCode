
const name1 = "大宝"

function add(num1,num2) {
  return num1 + num2;
}

function sub(num1,num2) {
  return num1 - num2;
}


// 1.commonJs 的导出规范
module.exports = {
  name1,
  add,
  sub
}

