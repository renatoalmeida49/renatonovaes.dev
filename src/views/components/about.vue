<template>

  <TheSection id="about">
    <Title>Sobre</Title>

    <p>Since 2011 working with IT. Programing and hardware are the things I love most in this area. Since 2021 working as a Frontend Developer.</p>

    <div class="row">
      <div class="col-lg-4">
        <img src="@/assets/img/resized-me.jpg" class="img-fluid" alt="">
      </div>

      <div class="col-lg-8 content">
        <h3>Frontend Developer.</h3>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>
        <div class="row">
          <div class="col-lg-6">
            <ul>
              <li><strong>Birthday:</strong> 25 Oct 1996</li>
              <li><strong>Website:</strong> www.renatonovaes.dev</li>
              <li><strong>Phone:</strong> +55 82 9 9690 1034</li>
              <li><strong>City:</strong> Maceió, BR</li>
            </ul>
          </div>
          <div class="col-lg-6">
            <ul>
              <li><strong>Age:</strong> 24</li>
              <li><strong>Degree:</strong> Master</li>
              <li><strong>PhEmailone:</strong> renatoalmeida49@gmail.com</li>
              <li><strong>Freelance:</strong> Available</li>
            </ul>
          </div>
        </div>
        <p>
          Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
          Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
        </p>
      </div>
    </div>
  </TheSection>

</template>


<script>

export default {
  name: "About"
}

</script>


<style lang="scss" scoped>

#about {
  text-align: center;

  .content {
    text-align: left;
    padding: 0 15px;

    h3 {
      font-weight: 700;
      font-size: 26px;
      color: #728394;
      margin-bottom: 8px;
    }

    ul {
      list-style: none;
      padding: 15px 0;
      margin: 0;

      li {
        padding-bottom: 10px;
        position: relative;

        &::before {
          content: '';
          display: inline-block;
          margin-right: 10px;
          width: 0;
          height: 0;
          border-top: 10px solid transparent;
          border-bottom: 10px solid transparent;
          border-left: 10px solid #0563bb;
        }
      }
    }
  } 
}

@media (max-width: 992px) {
  #about {
    .content {
      padding: 15px;
    }
  }
}

</style>