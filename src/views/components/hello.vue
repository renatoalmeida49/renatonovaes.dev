<template>
  
  <section class="hello d-flex flex-column justify-content-center">
    <div class="hello__container">
      <h1 class="hello__title">Renato Novaes</h1>

      <div class="hello__social">
        <template v-for="(social, index) in socialLinks">
          <a :key="index" :href="social.link" target="blank">
            <box-icon :name="social.icon" type="logo" color="#45505b" />
          </a>
        </template>
      </div>
    </div>
  </section>

</template>


<script>

export default {
  name: "Hello",

  data() {
    return {
      socialLinks: [
        {
          link: "https://www.facebook.com/renatonovaes49",
          icon: "facebook",
          label: "Facebook"
        },
        {
          link: "https://github.com/renatoalmeida49",
          icon: "github",
          label: "Github"
        },
        {
          link: "https://www.linkedin.com/in/renatonovaes49",
          icon: "linkedin",
          label: "Linkedin"
        },
        {
          link: "https://www.instagram.com/novaes_r",
          icon: "instagram",
          label: "Instagram"
        },
      ]
    }
  }
}

</script>


<style lang="scss" scoped>
.hello {
  height: 100vh;
  background-image: url('../../assets/img/me.jpg');
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  padding-left: 160px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.8);
    
  }

  &__container {
    position: relative;
  }

  &__title {
    margin: 0;
    font-size: 64px;
    font-weight: 700;
    line-height: 56px;
    color: #45505b;
  }

  &__social {
    padding: 20px 0;

    a {
      margin-right: 20px;
    }
  }
}

@media (max-width: 992px) {
  .hello {
    text-align: center;
    padding-left: 0;

    &__title {
      font-size: 32px;
      line-height: 36px;
    }
  }
}
</style>