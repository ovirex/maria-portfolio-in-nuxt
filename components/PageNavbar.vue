<template>
  <div class="px-4 d-block d-lg-none">
    <!-- navbar-->
    <header class="header">
      <nav class="navbar navbar-expand-lg navbar-light px-0">
        <button
          class="navbar-toggler navbar-toggler-right text-sm text-uppercase"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <svg class="svg-icon svg-icon-heavy svg-icon-sm text-dark">
            <use xlink:href="#menu-hamburger-1"></use>
          </svg>
        </button>
        <NuxtLink class="navbar-brand" to="/"
          ><img :src="logoLink" alt="" width="50"
        /></NuxtLink>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: 'PageNavbar',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    logoLink: {
      type: String,
      default() {
        return '~/assets/img/mylogo.svg'
      },
    },
  },
  watch: {
    $route(to, from) {
      // react to route changes...
      if ($('.sidebar, .page-holder').hasClass('active')) {
        $('.sidebar, .page-holder').toggleClass('active')
      }
    },
  },
  mounted() {
    this.navbarToggle()
  },
  methods: {
    navbarToggle() {
      $('.navbar-toggler').on('click dblclick', function () {
        $('.sidebar, .page-holder').toggleClass('active')
      })
    },
  },
}
</script>

