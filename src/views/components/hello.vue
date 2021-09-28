<template>
  
  <section class="hello d-flex flex-column justify-content-center">
    <div class="hello__container animate__animated animate__slideInDown">
      <h1 class="hello__title">Renato Novaes</h1>

      <vue-typed-js
        class="hello__type-animation"
        :strings="typeNames"
        :loop="true"
        :typeSpeed="100"
        :backDelay="2000"
        :backSpeed="25"
      >
        <h1>{{ $t('HELLO.HI') }} <span class="typing"></span></h1>
      </vue-typed-js>

      <SocialMedia />
    </div>
  </section>

</template>


<script>

export default {
  name: "Hello",

  data() {
    return {
      typeNames: ['Web Developer', 'Freelancer'],
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

  &__type-animation {
    padding: 8px 0;
    font-family: 'Roboto Mono', monospace;

    .typing {
      color: #0563bb;
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

    &__type-animation {
      justify-content: center;
    }
  }
}
</style>