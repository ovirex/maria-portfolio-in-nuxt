
<template>
  <div>
    <div class="row">
      <div class="col-lg-7">
        <h1>{{ projectData.title }}</h1>
        <p class="text-muted mb-5">{{ projectData.short_description }}</p>
      </div>
    </div>
    <div class="row mb-5">
      <lightbox-component
        :images-data="projectData.project_images"
      ></lightbox-component>
      <detail-description
        :desc="projectData.long_description"
        :tags="projectData.tags"
      ></detail-description>
    </div>
  </div>
</template>
<script>
import LightboxComponent from './detail-components/LightboxComponent.vue'
export default {
  name: 'DetailComponent',
  components: { LightboxComponent },
  data: () => ({
    projectData: {
      id: null,
      title: '',
      short_description: '',
      long_description: '',
      tags: [],
      thumbnail: '',
      project_images: [],
    },
  }),
  async fetch() {
    try {
      const projectToShow = await this.$content('projects')
        .where({ id: this.$route.params.id })
        .fetch()

      this.projectData = projectToShow[0]
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err)
    }
  },
}
</script>

