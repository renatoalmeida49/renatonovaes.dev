<template>
  
  <div class="menu-header">
    <button class="mobile-nav-toggle d-xl-none" @click="menuMobile">
      <box-icon size="lg" name="menu" color="#45505b" v-if="!showMenu"/>
      <box-icon size="lg" name="x" color="#45505b" v-else/>
    </button>

    <header id="header" :class="toggleMenu" class="d-flex flex-column justify-content-center">
      <nav class="nav-menu">
        <ul>
          <template v-for="(menu, index) in menuItens">
            <router-link :to="menu.link" :key="index">
              <li>
                <box-icon :name="menu.icon" class="icon" />
                <span>{{ menu.label }}</span>
              </li>
            </router-link>
          </template>
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
      menuItens: [
        {
          link: "/",
          icon: "home",
          label: "Início",
        },
        {
          link: "#about",
          icon: "user",
          label: "Sobre",
        },
        {
          link: "#curriculo",
          icon: "file-blank",
          label: "Curriculo",
        },
        {
          link: "#portfolio",
          icon: "food-menu",
          label: "Portfolio",
        },
        {
          link: "#start",
          icon: "server",
          label: "Serviço",
        },
      ]
    }
  },

  computed: {
    toggleMenu() {
      return {
        'active': this.showMenu
      }
    }
  },

  watch: {
    $route() {
      this.showMenu = !this.showMenu
    }
  },

  methods: {
    menuMobile() {
      this.showMenu = !this.showMenu
    }
  },
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
      left: -150%;
    }
    #header.active {
      left: 0;
    }
  }

  .nav-menu {
    ul {
      list-style: none;
      padding: 0;
      margin: 0;

      a {
        position: relative;
        white-space: nowrap;
        background: #f2f3f5;
        margin: 8px 0;
        height: 56px;
        width: 56px;
        border-radius: 50%;
        cursor: pointer;
        font-size: 22px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        transition: all .5s;

        &.router-link-exact-active {
          background-color: #0563bb;

          .icon {
            fill: #fff;
          }
        }

        li {
          color: #45505b;

          .icon {
            fill: #45505b;
          }

          span {
            display: none;
          }
        }
      }
    }
  }
  @media (max-width: 992px) {
    .nav-menu {
      ul {
        a {
          width: 100%;
          border-radius: 8px;
          padding: 10px;
          justify-content: flex-start;

          &.router-link-exact-active {
            li {
              color: white;
            }
          }

          li {
            display: flex;
            align-items: center;
            gap: 22px;

            span {
              display: inline-block;
            }
          }
        }
      }
    }
  }
}

</style>