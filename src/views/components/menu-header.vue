<template>
  
  <div class="menu-header">
    <button class="mobile-nav-toggle d-xl-none" @click="menuMobile">
      <box-icon name="menu" v-if="!showMenu"/>
      <box-icon name="x" v-else/>
    </button>

    <header id="header" :class="toggleMenu" class="d-flex flex-column justify-content-center">
      <nav class="nav-menu">
        <ul>
          <li><a href="#start"><box-icon name="home" />Início</a></li>
          <li><a href="#sobre"><box-icon name="user" />Sobre</a></li>
          <li><a href="#curriculo"><box-icon name="file-blank" />Curriculo</a></li>
          <li><a href="#portfolio"><box-icon name="food-menu" />Portfolio</a></li>
          <li><a href="#start"><box-icon name="server" />Serviço</a></li>
        </ul>
      </nav>
    </header>
  </div>

</template>


<script>

export default {
  name: "MenuHeader",

  data() {
    return {
      showMenu: false,
    }
  },

  methods: {
    menuMobile() {
      this.showMenu = !this.showMenu
    }
  },

  computed: {
    toggleMenu() {
      return {
        'active': this.showMenu
      }
    }
  }
}

</script>


<style lang="scss">

.menu-header {
  .mobile-nav-toggle {
    display: none;
  }
  @media (max-width: 992px) {
    .mobile-nav-toggle {
      display: block;
      position: fixed;
      right: 15px;
      top: 15px;
      z-index: 9998;
      border: 0;
      background: none;
      font-size: 24px;
      transition: all 0.4s;
      outline: none !important;
      line-height: 1;
      cursor: pointer;
      text-align: right;
    }
  }

  #header {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 9997;
    transition: all 0.5s;
    padding: 15px;
    overflow-y: auto;
  }

  @media (max-width: 992px) {
    #header {
      width: 100vw;
      background: #fff;
      border-right: 1px solid #e6e9ec;
      left: -100%;
    }
    #header.active {
      left: 0;
    }
  }
}

</style>