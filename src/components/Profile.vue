<template>
  <div class="profile-view">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
  export default {
    name: 'profile',
    data () {
      return {
        msg: 'Welcome to Profile View'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .profile-view {
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
