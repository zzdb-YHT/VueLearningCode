import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/home'
import About from '../components/about'

const routes = [
  {
    // 通过 重定向配置默认选中项
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: "/about",
    component: About
  }
]

// 改变 url 不向后端重新请求，有两种方式
//  1.url 的 hash 模式，常见 url 中出现 #
//  2.html5 的 history 模式
// vue-cli3 默认是 history 模式
// vue-cli2 设置 vue-router 的 mode 属性为 history

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
