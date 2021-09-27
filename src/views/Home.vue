<template>

  <div class="home">

    <MenuHeader />
    <Hello />
    <About />

  </div>

</template>


<script>

import MenuHeader from './components/menu-header.vue'
import Hello from './components/hello.vue'
import About from './components/about.vue'

export default {
  name: 'Home',

  components: {
    MenuHeader,
    Hello,
    About
  },
}
</script>

<style lang="scss" scoped></style>
