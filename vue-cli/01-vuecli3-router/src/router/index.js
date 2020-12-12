import {createRouter, createWebHistory} from 'vue-router'

// 默认方式
// import Home from '../components/home'
// import About from '../components/about'
// import User from '../components/user'

// 路由懒加载方式
const Home = () => import('../components/home')
const News = () => import('../components/homeNews')
const Message = () => import('../components/homeMessage')

const About = () => import('../components/about')
const User = () => import('../components/user')

const Profile = () => import('../components/profile')

const routes = [
  {
    // 通过 重定向配置默认选中项
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: {  // meta 中放的一些数据在路由守卫中使用
      title: '首页',
      keepAlive: true
    },

    // 路由嵌套配置
    children: [
      // 使用 keep-alive 配置默认选中项 和 保存状态，不再使用该方法
      // {
      //   // 通过 重定向配置默认选中项, 嵌套时， 默认选中需加完整路径
      //   path: '',
      //   redirect: '/home/news'
      // },

      // 配置 嵌套路径不需要加 ‘/’
      {
        path: 'news',
        component: News
      },
      {
        path: 'message',
        component: Message
      }
    ]
  },
  {
    path: "/about",
    component: About,
    meta: {
      title: '关于'
    }
  },

  // 设置路由 url 可动态拼接内容 userId 未参数名称
  {
    path: "/user/:userId",
    component: User,
    meta: {
      title: '用户'
    }
  },
  {
    path: "/profile",
    component: Profile,
    meta: {
      title: '我的'
    }
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
