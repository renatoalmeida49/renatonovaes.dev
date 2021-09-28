<template>
  
  <TheSection id="skills">
    <Title>{{ $t('SKILLS.TITLE') }}</Title>

    <!-- <h1>{{ $t('SKILLS.LANGUAGES') }}</h1> -->
    <div class="row">
      <template v-for="(lang, index) in languageSkills">
        <div :key="index" class="col-lg-6 py-3">
          <div class="progress">
            <div class="progress-header">
              <box-icon :name="lang.icon" class="icon" type="logo" color="#45505b" />
              <span class="skill">{{ lang.label }} <i class="val">{{ lang.value }}%</i></span>
            </div>
            <div class="progress-bar-wrap">
              <div class="progress-bar" role="progressbar" :style="getPercentual(lang.value)" :aria-valuenow="lang.value" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
        </div>
      </template>
    </div>

    <!-- <div class="row">
      <h1>{{ $t('SKILLS.SOFTWARES') }}</h1>

      <template v-for="(software, index) in softwareSkills">
        <div :key="index" class="col-lg-4 col-md-6 d-flex justify-content-center align-items-center">
          <progress-circle
            :completed-steps="software.value"
            :total-steps="100"
            :diameter="200"
            circle-color="#f4f5f6"
            start-color="#0563bb"
            stop-color="#0563bb"
          >
            <p class="mb-0">{{ software.label }}</p>
            <p class="mb-0">{{ software.value}}%</p>
          </progress-circle>
        </div>
      </template>
    </div> -->

  </TheSection>

</template>


<script>

// import { ProgressCircle } from 'vue-progress-circle'

export default {
  name: "Skills",

  components: {
    // ProgressCircle
  },

  data() {
    return {
      languageSkills: [
        {
          label: "HTML",
          value: 90,
          icon: "html5"
        },
        {
          label: "CSS",
          value: 85,
          icon: "css3"
        },
        {
          label: "JavaScript",
          value: 70,
          icon: "javascript"
        },
        {
          label: "Git",
          value: 60,
          icon: "git"
        },
        {
          label: "VueJS",
          value: 80,
          icon: "vuejs"
        },
        {
          label: "PHP",
          value: 40,
          icon: "php"
        },
      ],
      softwareSkills: [
        {
          label: "VSCode",
          value: 90
        },
        {
          label: "Postman",
          value: 60
        },
        {
          label: "Insomnia",
          value: 20
        },
      ]
    }
  },

  methods: {
    getPercentual(value) {
      return {
        width: `${value}%`
      }
    }
  }
}

</script>


<style lang="scss">

#skills {
  .progress {
    height: 58px;
    display: block;
    background: none;
    padding-right: 20px;

    &:hover {
      .progress-bar {
        width: 1px;
        height: 10px;
        transition: .9s;
        background-color: rgb(0, 162, 255);
      }
    }

    .progress-header {
      display: flex;
      align-items: center;

      .icon {
        float: left;
        margin-right: 5px;
      }

      .skill {
        padding: 10px 0;
        flex: 1;
        text-transform: uppercase;
        display: block;
        font-weight: 600;
        font-family: "Poppins", sans-serif;
        color: #45505b;

        .val {
          float: right;
        }
      }
    }

    .progress-bar-wrap {
      background: #f2f3f5;
      
      .progressbar {
        border-radius: 8px;
      }
    }

    .progress-bar {
      width: 1px;
      height: 10px;
      transition: .1s all;
      background-color: #0563bb;
    }
  }
}

</style>