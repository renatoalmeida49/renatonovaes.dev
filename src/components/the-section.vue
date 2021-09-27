<template>
  
  <section class="section">
    <slot />
  </section>

</template>


<script>

export default {
  name: "TheSection"
}

</script>


<style lang="scss" scoped>
.section {
  margin-left: 100px;
  padding: 60px 0;

  .row {
    --bs-gutter-x: 0
  }
}

@media (max-width: 992px) {
  .section {
    margin: 0;
    padding: 60px 30px;
  }
}
</style>