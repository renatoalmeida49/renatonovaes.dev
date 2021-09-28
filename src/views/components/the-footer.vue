<template>
  
  <footer id="footer">
    <h1>{{ $t('FOOTER.MESSAGE') }}</h1>

    <p>Renato Novaes</p>

    <SocialMedia />
  </footer>

</template>


<script>
export default {
  name: "TheFooter"
}
</script>


<style lang="scss">

#footer {
  background: #f7f8f9;
  color: #45505b;
  font-size: 14px;
  text-align: center;
  padding: 30px 0;

  h1 {
    font-size: 36px;
    font-weight: 700;
    position: relative;
    font-family: "Poppins", sans-serif;
    padding: 0;
    margin: 0 0 15px 0;
  }

  p {
    font-size: 18px;
    font-style: italic;
    padding: 0;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    &::before {
      content: '';
      display: inline-block;
      width: 50px;
      height: 4px;
      background-color: #0563bb;
      margin: 20px;
      border-radius: 8px;
    }

    &::after {
      content: '';
      display: inline-block;
      width: 50px;
      height: 4px;
      background-color: #0563bb;
      margin: 20px;
      border-radius: 8px;
    }
  }
}

</style>