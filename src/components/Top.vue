<template>
  <div class="top-view">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
  export default {
    name: 'top',
    data () {
      return {
        msg: 'Welcome to Top View'
      }
    }
  }
</script>

<style scoped>

  .top-view {
    padding-top: 45px;
  }
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
