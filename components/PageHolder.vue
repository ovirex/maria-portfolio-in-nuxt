
<template>
  <div class="page-holder">
    <page-navbar></page-navbar>
    <content-wrapper></content-wrapper>
    <footer-component></footer-component>
  </div>
</template>
<script>
import PageNavbar from './PageNavbar.vue'
export default {
  name: 'PageHolder',
  components: { PageNavbar },
}
</script>
