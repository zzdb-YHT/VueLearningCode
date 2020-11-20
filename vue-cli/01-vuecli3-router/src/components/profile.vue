<template>
  <h2>这是 profile </h2>
  <span>{{$route.query}}</span><br/>
  <span>{{$route.query.userName}}</span><br/>
  <span>{{$route.query.password}}</span><br/>
</template>

<script>
  export default {
    name: "profile"
  }
</script>

<style scoped>

</style>