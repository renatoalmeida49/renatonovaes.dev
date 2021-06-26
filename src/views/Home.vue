<template>
<div class="home">
  <div class="menu-mobile" @click="toggleMenu">
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
  </div>

  <nav class="nav-menu" :class="styleMenu">
    <ul>
      <li><a href="#start">Início</a></li>
      <li><a href="#sobre">Sobre</a></li>
      <li><a href="#curriculo">Curriculo</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#start">Serviço</a></li>
    </ul>
  </nav>

  <section id="start">
    <div class="backdrop">
      <img src="@/assets/img/logo.svg" alt="Minha logo"/>
    </div>
  </section>

  <section id="sobre">
    <h1>Sobre</h1>

    <p>Estou na área de TI desde 2011. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, alias quis tempora laborum id maxime rem voluptatem sit praesentium vel porro eum quaerat, nobis ipsam neque facere nisi animi nulla.</p>

    <h2>Desenvolvedor Frontend</h2>

    <ul>
      <li><span>Nascimento:</span>25 Oct 1996</li>
      <li><span>Website:</span>Esse mesmo</li>
      <li><span>Phone:</span>+55 82 9 9690 1034</li>
      <li><span>Cidade:</span>Maceió-AL, Brasil</li>
      <li><span>Educação:</span>Superior</li>
      <li><span>Freelance:</span>Disponível</li>
    </ul>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic minus velit dolore, asperiores sint aspernatur officiis ipsam est labore corporis dolorem, iure assumenda ratione. Quia nesciunt nam tempora provident quae.</p>
  </section>

  <section id="fatos">
    <h1>Fatos</h1>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non iure nostrum aut magnam recusandae commodi deleniti! Distinctio temporibus nobis animi adipisci explicabo, tempore facilis quae aliquam! Sit eaque nemo asperiores.</p>

    <div class="card">
      <img src="" alt="Clientes felizes">
      <span>232</span>
      <p>Clientes felizes</p>
    </div>

    <div class="card">
      <img src="" alt="Clientes felizes">
      <span>232</span>
      <p>Projetos</p>
    </div>

    <div class="card">
      <img src="" alt="Clientes felizes">
      <span>232</span>
      <p>Horas de suporte</p>
    </div>

    <div class="card">
      <img src="" alt="Clientes felizes">
      <span>232</span>
      <p>Colegas</p>
    </div>
  </section>

  <section id="habilidades"></section>
</div>
</template>

<script>

export default {
  name: 'Home',
  components: {
    
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

<style lang="scss">
@import './style.scss';
</style>
