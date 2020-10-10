const app = new Vue({
  el: '#app',
  data:{
    books:[
      {
        id: 1,
        name: "明朝那些事",
        date: "2017-01",
        price: 58,
        count: 1
      },
      {
        id: 2,
        name: "欢喜城",
        date: "2018-02",
        price: 25,
        count: 1
      },
      {
        id: 3,
        name: "平凡的世界",
        date: "2019-03",
        price: 85,
        count: 1
      },
      {
        id: 4,
        name: "三体",
        date: "2020-04",
        price: 125,
        count: 1
      }
    ]
  },
  methods: {
    getFinalPrice(price) {   // 函数实现保留两位小数
      return "￥" + price.toFixed(2);
    },
    increment(index) {
      this.books[index].count ++;
    },
    decrement(index) {
      this.books[index].count --;
    },
    removeBook(index) {
      this.books.splice(index,1);
    }
  },
  computed: {
    totalPrice() {
      let total = 0;

      //遍历方法1
      // for(let i = 0; i < this.books.length; i++) {
      //   total = total + this.books[i].price * this.books[i].count;
      // }


      //遍历方法2
      // for(let i in this.books) {
      //   total = total + this.books[i].price * this.books[i].count;
      // }

      //遍历方法3
      // for(let book of this.books) {
      //   total = total + book.price * book.count;
      // }

      //遍历方法4
      total = this.books.reduce(function (preValue,book) {
        return preValue + book.price * book.count;
      },0)

      return total;
    }


  },
  filters: {                // 过滤器实现保留两位小数
    showPrice(price) {
      return "￥" + price.toFixed(2);
    }
  }
});

// 数组的高阶处理函数 filter, map, reduce 的使用，可连接使用

let array = [120,50,80,200,90,150];

// 1.filter 对数组元素进行过滤，返回一个新数组
let array1 = array.filter(function (value) {   //返回 array 中 小于100 的元素，构成一个新数组
  return value < 100;   //根据返回 true 或 false，决定是否将元素加入到新数组中
})

console.log(array1)

// 2.map 对数组元素进行操作，返回一个新数组
let array2 = array.map(function (value) {    //  返回原数组每个元素 * 2 之后的新元素构成的数组
  return value * 2;
})

console.log(array2)

// 3.reduce 对数组中的元素进行汇总，返回一个汇总值
//数组元素累加
let total1 = array.reduce(function (preValue,value) {  // preValue 前一个值，value 当前值， 当数组元素为对象时， value 为对象
  return preValue + value;
},0)    // preValue 遍历的初始值

console.log(total1)

//连接使用示例
let total2 = array.filter(function (n) {
  return n < 100;
}).map(function (n) {
  return n * 2;
}).reduce(function (preValue,n) {
  return preValue + n;
},0)

console.log(total2)





