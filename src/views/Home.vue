<template>
<div class="home">
  <div class="menu-mobile" @click="toggleMenu">
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
  </div>

  <nav class="nav-menu" :class="styleMenu">
    <ul>
      <li><a href="#start"><i class="fas fa-house-user"></i>Início</a></li>
      <li><a href="#sobre"><i class="fas fa-address-card"></i>Sobre</a></li>
      <li><a href="#curriculo"><i class="fas fa-file"></i>Curriculo</a></li>
      <li><a href="#portfolio"><i class="fas fa-clipboard"></i>Portfolio</a></li>
      <li><a href="#start"><i class="fas fa-server"></i>Serviço</a></li>
    </ul>
  </nav>

  <Hello />

</div>
</template>


<script>

import Hello from './components/hello.vue'

export default {
  name: 'Home',

  components: {
    Hello
  },

  data() {
    return {
      showMenu: false,
    }
  },
  methods: {
    toggleMenu() {
      console.log('toggle')
      this.showMenu = !this.showMenu
    }
  },
  computed: {
    styleMenu() {
      return {
        'ativo': this.showMenu
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>
