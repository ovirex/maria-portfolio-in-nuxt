<template>
  <div class="col-lg-6 mb-4">
    <div class="d-flex">
      <div class="flex-grow-1">
        <svg class="svg-icon text-primary">
          <use :xlink:href="svgIcon"></use>
        </svg>
      </div>
      <div class="ml-3">
        <h3 class="h5 mr-3">{{ skill }}</h3>
        <p class="text-muted mb-2">{{ desc }}</p>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable vue/require-default-prop */
export default {
  name: 'AboutSkill',
  props: {
    skill: {
      type: String,
    },
    desc: {
      type: String,
    },
    svgIcon: {
      type: String,
    },
  },
}
</script>
