import Vue from 'vue'
import App from './App'
import router from './router'
// import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

// axios 框架网络请求示例
// 无参数请求
// axios({
//   url: "http://123.207.32.32:8000/home/multidata"
// }).then(res => {
//   // console.log(res);
// })

// 带参数请求
// 需要在 config/index 下配置 proxy 代理解决跨域问题
// axios({
//   // url: "/api/file/findByPage",
//   url: "/api/njlift/getToken",
//   params: {
//     // pageNum: 1,
//     // pageSize: 1
//     appid: "402880ee315ef13701315f15b8980002"
//   },
//   method: "get",
// }).then(res => {
//   // console.log(res);
// })

// 并发请求，两个请求都执行完后，执行then
// 方式1
// axios.all([axios({
//   url: "http://123.207.32.32:8000/home/multidata"
// }),axios({
//   url: "/api/njlift/getToken",
//   params: {
//     // pageNum: 1,
//     // pageSize: 1
//     appid: "402880ee315ef13701315f15b8980002"
//   },
//   method: "get",
// })]).then((res) => {
//   // console.log(res[0]);
//   // console.log(res[1]);
// })

// 方式1-spread 自动解构
// axios.all([axios({
//   url: "http://123.207.32.32:8000/home/multidata"
// }),axios({
//   url: "/api/njlift/getToken",
//   params: {
//     // pageNum: 1,
//     // pageSize: 1
//     appid: "402880ee315ef13701315f15b8980002"
//   },
//   method: "get",
// })]).then(axios.spread((res1,res2) => {
//   console.log(res1);
//   console.log(res2);
// }))


//axios 全局参数配置

// axios.defaults.baseURL = "/api";  //基础URL
// axios.defaults.timeout = 5000;   // 超时时间-毫秒
//
// axios({
//   url: "/njlift/getToken",
//   method: "post",
//   params: {
//     appid: "402880ee315ef13701315f15b8980002"
//   }
// }).then(res => {
//   console.log(res);
// })

import {request} from './network/request'

request({
  url: "/njlift/getToken",
  params: {
    appid: "402880ee315ef13701315f15b8980002"
  }
}).then(res => {
  console.log(res);
})




