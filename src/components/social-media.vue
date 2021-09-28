<template>
  
  <div class="social-media">
    <template v-for="(social, index) in socialLinks">
      <a :key="index" :href="social.link" target="blank">
        <box-icon :name="social.icon" type="logo" color="#45505b" />
      </a>
    </template>
  </div>

</template>


<script>

export default {
  name: "SocialMedia",

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


<style lang="scss">

.social-media {
  padding: 20px 0;

  a {
    margin-right: 20px;
  }
}

</style>