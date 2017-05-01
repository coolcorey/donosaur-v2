<template>
  <div id="app">
    <nav class="ui fixed menu">
      <div class="ui container">
        <a href="#" class="header item">
          <img class="logo" src="./assets/logo.png" alt="logo">
        </a>
        <div class="right menu">
          <router-link to="/" class="item nav_item">Home</router-link>
          <router-link to="about" class="item nav_item">About</router-link>
        </div>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  //margin-left: 60px;
  //margin-right:60px;
  //margin: 5%;
}
body {
  background: transparent;
}
html {
  //background: rgba(95, 158, 160, 0.61);
  //background: rgba(3, 167, 151, 0.47);
  background: rgba(3, 105, 95, 0.67);
}

.truncate {
  width: 95%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

nav {
  background-color: rgba(0, 0, 0, 0.35) !important;
}

.logo {
  height: 40px;
  width: 150px !important;
}

.nav_item {
  color: #eee !important;
}

.nav_item:hover {
  color: #fff !important;
}

</style>
