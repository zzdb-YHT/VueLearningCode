import Vue from 'vue'
import Vuex from 'vuex'

import {
  TEST_TYPE
} from './mutations-types'

// 需要在要使用的组件中引用

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {   // 全局变量
    user: {
      name : "Tony",
      age : 36
    },
    counter : 100,
    students : [
      {name:"Lisa",age:25},
      {name:"Tom",age:19},
      {name:"Bob",age:12}
    ]
  },
  getters: {  // 相当于计算属性 compute
    counterPowder(state) {
      return state.counter * state.counter;
    },
    studentMore20(state) {
      return state.students.filter(student => {
        return student.age > 20;
      })
    },
    studentMore20length(state,getters) {
      return getters.studentMore20.length;
    },
    studentMoreDyn(state) {
      return function (age) {
        return state.students.filter(student => {
         return student.age > age;
        })
      }
    }
  },
  mutations: {  // 全局变量在这里进行操作
    increment(state) {
      state.counter ++;
    },
    decrement(state) {
      state.counter --;
    },
    incrementCount1(state,count) {  // 带参数-写法1-普通写法
      state.counter = state.counter + count;
    },
    incrementCount2(state,payload) {  // 带参数-写法2-特殊写法
      state.counter = state.counter + payload.count;
    },
    addStudent(state,student) {   // 普通写法传参为对象
      state.students.push(student);
    },

    // 增加和删除对象属性的操作，需要特殊的操作才能实现响应式
    changeUser(state) {
      // 1.增加属性
      // state.user['sex'] = "男";   // 这种方法操作不是响应式，页面不会发生改变
      // Vue.set(state.user,'sex',"男");  // 这种方法可以实现响应式

    //  2.删除属性
    //   delete state.user.age;  // 该种方法不是响应式
      Vue.delete(state.user, 'age') // 这种方式可实现响应式

    },
    //
    [TEST_TYPE](state) {
      console.log('官方建议的-mutations 写法');
    }
  },
  actions: {

  }
});

export default store
