<template>

  <div id="app">
    <MenuHeader />
    <router-view/>
  </div>

</template>


<script>

import MenuHeader from './components/menu-header.vue'

export default {
  name: "App",

  components: {
    MenuHeader
  }
}

</script>


<style lang="scss">

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
