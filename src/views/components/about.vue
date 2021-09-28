<template>

  <TheSection id="about">
    <Title>{{ $t('ABOUT.TITLE') }}</Title>

    <p>{{ $t('ABOUT.DESCRIPTION') }}</p>

    <div class="row">
      <div class="col-lg-4">
        <img src="@/assets/img/resized-me.jpg" class="img-fluid" alt="">
      </div>

      <div class="col-lg-8 content">
        <h3>{{ $t('ABOUT.DETAILS.ROLE') }}</h3>

        <p>{{ $t('ABOUT.DETAILS.DESCRIPTION') }}</p>
        <div class="row">
          <div class="col-lg-6">
            <ul>
              <!-- <li><strong>{{ $t('ABOUT.DETAILS.LIST.BIRTHDAY.LABEL') }}:</strong> {{ $t('ABOUT.DETAILS.LIST.BIRTHDAY.VALUE') }}</li> -->
              <li><strong>{{ $t('ABOUT.DETAILS.LIST.WEBSITE.LABEL') }}:</strong> {{ $t('ABOUT.DETAILS.LIST.WEBSITE.VALUE') }}</li>
              <li><strong>{{ $t('ABOUT.DETAILS.LIST.PHONE.LABEL') }}:</strong> {{ $t('ABOUT.DETAILS.LIST.PHONE.VALUE') }}</li>
              <li><strong>{{ $t('ABOUT.DETAILS.LIST.CITY.LABEL') }}:</strong> {{ $t('ABOUT.DETAILS.LIST.CITY.VALUE') }}</li>
            </ul>
          </div>
          <div class="col-lg-6">
            <ul>
              <!-- <li><strong>{{ $t('ABOUT.DETAILS.LIST.AGE.LABEL') }}:</strong> {{ $t('ABOUT.DETAILS.LIST.AGE.VALUE') }}</li> -->
              <li><strong>{{ $t('ABOUT.DETAILS.LIST.DEGREE.LABEL') }}:</strong> {{ $t('ABOUT.DETAILS.LIST.DEGREE.VALUE') }}</li>
              <li><strong>{{ $t('ABOUT.DETAILS.LIST.EMAIL.LABEL') }}:</strong> {{ $t('ABOUT.DETAILS.LIST.EMAIL.VALUE') }}</li>
              <li><strong>{{ $t('ABOUT.DETAILS.LIST.FREELANCE.LABEL') }}:</strong> {{ $t('ABOUT.DETAILS.LIST.FREELANCE.VALUE') }}</li>
            </ul>
          </div>
        </div>
        <p>{{ $t('ABOUT.CONCLUSION') }}</p>
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

  img {
    max-width: 300px;
  }

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