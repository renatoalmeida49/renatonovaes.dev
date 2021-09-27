<template>
  
  <section class="hello d-flex flex-column justify-content-center">
    <div class="hello__container">
      <h1 class="hello__title">Renato Novaes</h1>
    </div>
  </section>

</template>


<script>

export default {
  name: "Hello"
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
}

@media (max-width: 992px) {
  .hello {
    text-align: center;
    padding-left: 0;
  }
}
</style>