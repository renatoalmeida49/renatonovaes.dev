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

  <section id="start">
    <div class="backdrop">
      <img src="@/assets/img/logo.svg" alt="Minha logo"/>
    </div>
  </section>

  <section id="sobre">
    <Title>Sobre</Title>

    <p>Estou na área de TI desde 2011. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, alias quis tempora laborum id maxime rem voluptatem sit praesentium vel porro eum quaerat, nobis ipsam neque facere nisi animi nulla.</p>

    <img src="@/assets/img/me_2.jpg" />

    <h2>Desenvolvedor Frontend</h2>

    <ul>
      <li><i class="fas fa-caret-right fa-lg"></i><span>Nascimento:</span> 25 Oct 1996</li>
      <li><i class="fas fa-caret-right fa-lg"></i><span>Website:</span> Esse mesmo</li>
      <li><i class="fas fa-caret-right fa-lg"></i><span>Phone:</span> +55 82 9 9690 1034</li>
      <li><i class="fas fa-caret-right fa-lg"></i><span>Cidade:</span> Maceió-AL, Brasil</li>
      <li><i class="fas fa-caret-right fa-lg"></i><span>Educação:</span> Superior</li>
      <li><i class="fas fa-caret-right fa-lg"></i><span>Freelance:</span> Disponível</li>
    </ul>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic minus velit dolore, asperiores sint aspernatur officiis ipsam est labore corporis dolorem, iure assumenda ratione. Quia nesciunt nam tempora provident quae.</p>
  </section>

  <section id="fatos">
    <Title>Fatos</Title>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non iure nostrum aut magnam recusandae commodi deleniti! Distinctio temporibus nobis animi adipisci explicabo, tempore facilis quae aliquam! Sit eaque nemo asperiores.</p>

    <div class="card">
      <i class="fas fa-smile-beam fa-6x"></i>
      <span>232</span>
      <p>Clientes felizes</p>
    </div>

    <div class="card">
      <i class="fas fa-project-diagram fa-6x"></i>
      <span>232</span>
      <p>Projetos</p>
    </div>

    <div class="card">
      <i class="fas fa-headset fa-6x"></i>
      <span>232</span>
      <p>Horas de suporte</p>
    </div>

    <div class="card">
      <i class="fas fa-users fa-6x"></i>
      <span>232</span>
      <p>Colegas</p>
    </div>
  </section>

  <section id="habilidades"></section>
</div>
</template>

<script>
import Title from "@/components/Title.vue"

export default {
  name: 'Home',
  components: {
    Title
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
