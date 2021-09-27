<template>
  
  <TheSection id="resume">
    <Title>Resume</Title>

    <div class="row">
      <div class="col-lg-6">
        <h3 class="resume-title">Education</h3>
        <div class="resume-item">
          <h4>IFAL - Federal Institute Of Alagoas</h4>
          <h5>2011 - 2015</h5>
          <p><em>Maceió, AL</em></p>
          <p>Computer technical course integrated with high school.</p>
        </div>
        <div class="resume-item">
          <h4>UNIT - Tiradentes University</h4>
          <h5>2017 - 2019</h5>
          <p><em>Maceió, AL</em></p>
          <p>Technologist in Analysis and Systems Development</p>
        </div>
      </div>
      <div class="col-lg-6">
        <h3 class="resume-title">Professional Experience</h3>
        <div class="resume-item">
          <h4>Junior Frontend Developer</h4>
          <h5>2021 - Present</h5>
          <p><em>Experion, New York, NY </em></p>
          <ul>
            <li>Working with a large team developing a big project for Locaweb company</li>
            <li>The main framework was VueJS to work with Javascript. For CSS, Bootstrap in the most part, but still using Vanilla CSS.</li>
            <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li>
            <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li>
          </ul>
        </div>
        <div class="resume-item">
          <h4>Trainee Frontend Developer</h4>
          <h5>2021 - Present</h5>
          <p><em>Stepping Stone Advertising, New York, NY</em></p>
          <ul>
            <li>Developed of a educational tool.</li>
            <li>A real challenge, working with a Mid Developer.</li>
            <li>Recommended and consulted with clients on the most appropriate graphic design</li>
            <li>Created 4+ design presentations and proposals a month for clients and account managers</li>
          </ul>
        </div>
      </div>
    </div>
  </TheSection>

</template>


<script>

export default {
  name: "Resume"
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