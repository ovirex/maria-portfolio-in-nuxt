<template>
  <footer class="text-muted" style="background: #0d0d0d">
    <div class="container-fluid py-5">
      <div class="row">
        <div class="col-lg-10 mx-auto">
          <div class="row">
            <footer-about :aboutme-text="footerAboutmeText"></footer-about>
            <footer-follow></footer-follow>
          </div>
        </div>
      </div>
    </div>
    <footer-copyright></footer-copyright>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    footerAboutmeText: {
      type: Object,
    },
  },
}
</script>
