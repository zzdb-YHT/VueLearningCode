
// 导入方式1

import { name1, add1} from "./export.js";

console.log(name1)
console.log(add1(20,30))


//导入方式2

import { name2, add2} from "./export.js";
console.log(name2)
console.log(add2(10,20))

//导入方式2
import { Person } from "./export.js";
let p = new Person();
console.log(p.name)
p.run()

//导入方式4  default 使用者可以自由命名
// import thisAddrsss from "./export.js"
// console.log(thisAddrsss)

import thisSub from "./export.js"
console.log(thisSub(100,1))


//导入方式5  统一全部导入， 作为对象使用
import * as t from "./export.js"
console.log(t.name1)
console.log(t.add1(1000,200))

let m = new t.Person();
m.run()

console.log(t.default(123,456))
