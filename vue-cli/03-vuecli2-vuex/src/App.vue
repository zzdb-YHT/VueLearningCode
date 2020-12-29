<template>
  <div id="app">

    <button @click="testType">官方建议的 mutations 写法</button>

    <h2>{{$store.state.user}}</h2>
    <button @click="changeUser">验证一些非响应式方法</button>

    <h2>{{$store.state.counter}}</h2>
    <hello-world></hello-world>
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <h2>counter的平方-{{$store.getters.counterPowder}}</h2>

    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>


    <h3>students-{{$store.state.students}}</h3>
    <h3>students大于20-{{$store.getters.studentMore20}}</h3>
    <h3>students大于20数量-{{$store.getters.studentMore20length}}</h3>
    <h3>students动态岁数-{{$store.getters.studentMoreDyn(15)}}</h3>
    <button @click="addStudent">添加学生</button>
  </div>
</template>

<script>

  import HelloWorld from "./components/HelloWorld";
  import store from "./store/store";

  import {
    TEST_TYPE
  } from './store/mutations-types'

  export default {
    name: 'App',
    store,  // 需要手动引用
    components: {
      HelloWorld
    },
    methods: {
      add() {
        this.$store.commit('increment');
      },
      sub() {
        this.$store.commit('decrement');
      },
      addCount(count) {
        // 普通方式
        // this.$store.commit('incrementCount1',count);

        // 特殊方式
        this.$store.commit({
          type: 'incrementCount2',
          count: count
        })
      },

      //普通方式传对象
      addStudent() {
        let student = {name:"Alan",age:35};
        this.$store.commit('addStudent',student)
      },

      changeUser() {
        this.$store.commit('changeUser');
      },

      // 官方建议的 mutations 写法
      testType() {
        this.$store.commit(TEST_TYPE);
      }

    }
  }
</script>

<style>

</style>
