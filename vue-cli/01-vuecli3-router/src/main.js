import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')

// 路由守卫
router.beforeEach((to,from,next) => {

  console.log(to)
  document.title = to.meta.title;
  // document.title = to.matched[0].meta.title;   // vue-vli2 出现路由嵌套可能出现的问题
  next();
})
