<template>
  
  <TheSection id="resume">
    <Title>{{ $t('RESUME.TITLE') }}</Title>

    <div class="row">
      <div class="col-lg-6">
        <h3 class="resume-title">{{ $t('RESUME.EDUCATION.TITLE') }}</h3>

        <template v-for="(item, index) in education">
          <div :key="index" class="resume-item">
            <h4>{{ $t(item.location) }}</h4>
            <h5>{{ $t(item.period) }}</h5>
            <p><em>{{ $t(item.city) }}</em></p>
            <p>{{ $t(item.description) }}</p>
          </div>
        </template>
      </div>
      <div class="col-lg-6">
        <h3 class="resume-title">{{ $t('RESUME.EXPERIENCES.TITLE') }}</h3>

        <template v-for="(item, index) in experience">
          <div :key="index" class="resume-item">
            <h4>{{ $t(item.job) }}</h4>
            <h5>{{ $t(item.period) }}</h5>
            <p><em>{{ $t(item.location) }}</em></p>
            <ul>
              <li>{{ $t(item.details.team) }}</li>
              <li>{{ $t(item.details.tools) }}</li>
            </ul>
          </div>
        </template>
      </div>
    </div>
  </TheSection>

</template>


<script>

export default {
  name: "Resume",

  data() {
    return {
      education: [
        {
          location: "RESUME.EDUCATION.UNIT.LOCATION",
          period: "RESUME.EDUCATION.UNIT.PERIOD",
          city: "RESUME.EDUCATION.UNIT.CITY",
          description: "RESUME.EDUCATION.UNIT.DESCRIPTION"
        },
        {
          location: "RESUME.EDUCATION.IFAL.LOCATION",
          period: "RESUME.EDUCATION.IFAL.PERIOD",
          city: "RESUME.EDUCATION.IFAL.CITY",
          description: "RESUME.EDUCATION.IFAL.DESCRIPTION"
        },
      ],
      experience: [
        {
          job: "RESUME.EXPERIENCES.JUNIOR_DEVELOPER.JOB",
          period: "RESUME.EXPERIENCES.JUNIOR_DEVELOPER.PERIOD",
          location: "RESUME.EXPERIENCES.JUNIOR_DEVELOPER.LOCATION",
          details: {
            team: "RESUME.EXPERIENCES.JUNIOR_DEVELOPER.DETAILS.TEAM",
            tools: "RESUME.EXPERIENCES.JUNIOR_DEVELOPER.DETAILS.TOOLS"
          }
        },
        {
          job: "RESUME.EXPERIENCES.TRAINEE_DEVELOPER.JOB",
          period: "RESUME.EXPERIENCES.TRAINEE_DEVELOPER.PERIOD",
          location: "RESUME.EXPERIENCES.TRAINEE_DEVELOPER.LOCATION",
          details: {
            team: "RESUME.EXPERIENCES.TRAINEE_DEVELOPER.DETAILS.TEAM",
            tools: "RESUME.EXPERIENCES.TRAINEE_DEVELOPER.DETAILS.TOOLS"
          }
        }
      ]
    }
  }
}

</script>


<style lang="scss" scoped>

#resume {
  .resume-title {
    font-size: 26px;
    font-weight: 700;
    margin-top: 20px;
    margin-bottom: 20px;
    color: #45505b;
  }

  .resume-item {
    padding: 0 0 20px 20px;
    margin-top: -2px;
    border-left: 2px solid #0563bb;
    position: relative;

    &:last-child {
      padding-bottom: 0;
    }

    &::before {
      content: "";
      position: absolute;
      width: 16px;
      height: 16px;
      border-radius: 50px;
      left: -9px;
      top: 0;
      background: #fff;
      border: 2px solid #0563bb;
    }

    h4 {
      line-height: 18px;
      font-size: 18px;
      font-weight: 600;
      text-transform: uppercase;
      font-family: "Poppins", sans-serif;
      color: #0563bb;
      margin-bottom: 10px;
    }

    h5 {
      font-size: 16px;
      background: #f7f8f9;
      padding: 5px 15px;
      display: inline-block;
      font-weight: 600;
      margin-bottom: 10px;
    }

    ul {
      padding-left: 20px;

      li {
        padding-bottom: 10px;
      }
    }
  }
}

</style>