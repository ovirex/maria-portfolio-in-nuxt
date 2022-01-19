
<template>
  <div class="page-holder">
    <page-navbar :logo-link="websiteLogoLink"></page-navbar>
    <content-wrapper></content-wrapper>
    <footer-component
      :footer-aboutme-text="footerDescription"
    ></footer-component>
  </div>
</template>
<script>
import PageNavbar from './PageNavbar.vue'
export default {
  name: 'PageHolder',
  components: { PageNavbar },
  data() {
    return {
      websiteLogoLink: '',
      footerDescription: {},
    }
  },
  async fetch() {
    try {
      const footerDescriptionBody = await this.$content('global')
        .only(['body'])
        .fetch()
      this.footerDescription = footerDescriptionBody[0]
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err)
    }
    try {
      const logo = await this.$content('global').only(['logo']).fetch()
      this.websiteLogoLink = logo[0].logo
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err)
    }
  },
}
</script>
