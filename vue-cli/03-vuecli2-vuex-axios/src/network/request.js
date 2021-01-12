import axios from 'axios'

/*
网络请求模块的封装
1.项目中使用第三方插件时，应做一层封装，避免插件修改，导致项目大范围更改
2.做网络请求时存在不同的端口及域名，应该使用axios实例，而不是全局配置
 */

export function request(config) {
  const instance = axios.create({
    baseURL: '/api',
    timeout: 5000
  });

  //axios拦截器
  //1.请求拦截
  instance.interceptors.request.use(config => {
    console.log("请求成功拦截")
    console.log(config);
    return config;
  },error => {
    console.log(error);
  })

  //2.响应拦截
  instance.interceptors.response.use(res => {
    console.log("响应成功拦截")
    console.log(res);
    return res.data; // 响应只返回 data 即可
  },error => {
    console.log(error);
  })



  return instance(config);  // 返回1个实例-promise
}
