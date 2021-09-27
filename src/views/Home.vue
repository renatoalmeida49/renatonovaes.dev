<template>
<div class="home">
  
  <MenuHeader />
  <Hello />

</div>
</template>


<script>

import MenuHeader from './components/menu-header.vue'
import Hello from './components/hello.vue'

export default {
  name: 'Home',

  components: {
    MenuHeader,
    Hello
  },
}
</script>

<style lang="scss" scoped>

</style>
