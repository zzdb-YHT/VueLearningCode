<template>
  <h3>{{$store.state.counter}}</h3>
</template>

<script>
  import store from "../store/store";

  export default {
    name: "HelloWorld",
    store
  }
</script>

<style scoped>

</style>
