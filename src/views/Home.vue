<template>

  <div class="home">

    <MenuHeader />
    <Hello />
    <About />
    <Skills />
    <Resume />

  </div>

</template>


<script>

import MenuHeader from './components/menu-header.vue'
import Hello from './components/hello.vue'
import About from './components/about.vue'
import Skills from './components/skills.vue'
import Resume from './components/resume.vue'

export default {
  name: 'Home',

  components: {
    MenuHeader,
    Hello,
    About,
    Skills,
    Resume
  },
}
</script>

<style lang="scss" scoped></style>
