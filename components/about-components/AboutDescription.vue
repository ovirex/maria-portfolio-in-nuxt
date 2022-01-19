<template>
  <div class="p-5 mb-5 bg-light">
    <div class="row">
      <div class="col-sm-3">
        <img
          class="img-fluid img-thumbnail rounded-circle"
          :src="profilePicLink"
          alt=""
        />
      </div>
      <div class="col-sm-9">
        <h1 class="font-weight-normal">
          Hello! I'm <strong>María Gabriela Pérez</strong>.
        </h1>
        <h2 class="h1 font-weight-normal mb-4">
          I'm a <strong>Graphic Designer</strong> and Publicist.
        </h2>

        <nuxt-content :document="description"></nuxt-content>

        <ul class="list-inline mb-0">
          <li class="list-inline-item mr-5 my-2">
            <!-- Display resumes fetched from content -->
            <a
              v-for="(resume, index) in resumes"
              :key="index"
              class="btn btn-primary rounded-pill mb-2 mr-2"
              :href="resume.resume_pdf"
              target="blank"
            >
              <svg class="svg-icon mr-2 align-middle svg-icon-sm">
                <use xlink:href="#survey-1"></use></svg
              ><span class="align-middle">{{ resume.text }}</span>
            </a>
          </li>
          <li class="list-inline-item my-2">
            <ul class="list-inline mb-0">
              <li class="list-inline-item">
                <a
                  class="reset-anchor"
                  href="https://www.instagram.com/mariaescribe/"
                  target="blank"
                >
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a
                  class="reset-anchor"
                  href="https://www.linkedin.com/in/mariaescribe/"
                  target="blank"
                >
                  <i class="fab fa-linkedin"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a
                  class="reset-anchor"
                  href="https://www.behance.net/mariaescribe"
                  target="blank"
                >
                  <i class="fab fa-behance"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a
                  class="reset-anchor"
                  href="https://vm.tiktok.com/ZM83vpCnP/"
                  target="blank"
                >
                  <i class="fab fa-tiktok"></i>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AboutDescription',
  data() {
    return {
      resumes: [],
      description: {},
      profilePicLink: '',
    }
  },
  async fetch() {
    try {
      const resumesFetched = await this.$content('resumes').fetch()
      this.resumes = resumesFetched[0].resumes
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err)
    }

    try {
      const myDescription = await this.$content('about_info')
        .only(['body'])
        .fetch()

      this.description = myDescription[0]
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err)
    }
    try {
      const myProfilePic = await this.$content('about_info')
        .only(['profile_pic'])
        .fetch()

      this.profilePicLink = myProfilePic[0].profile_pic
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err)
    }
  },
}
</script>
