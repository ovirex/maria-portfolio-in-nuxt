<template>
  <div class="masonry-wrapper">
    <client-only>
      <grid-item
        v-for="project in projectsToShow"
        :key="project.id"
        :project="project"
      ></grid-item>
    </client-only>
  </div>
</template>
<script>
export default {
  name: 'MasonryWrapper',
  data: () => ({
    projects: [],
    projectsToShow: [],
    path: '',
  }),
  async fetch() {
    try {
      this.projects = await this.$content('projects').fetch()
      this.filterProjectsAccordingToPath()
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err)
    }
  },

  watch: {
    $route(to, from) {
      // react to route changes...
      this.path = to.path.replace('/', '')
      this.filterProjectsAccordingToPath()
    },
  },

  methods: {
    filterProjectsAccordingToPath() {
      this.path = this.$route.path.replace('/', '')

      const tag = this.capitalizePathName(this.path)

      if (tag === null) {
        this.projectsToShow = this.projects
      } else {
        this.projectsToShow = this.projects.filter((project) => {
          return project.project_tags.includes(tag)
        })
      }
    },
    capitalizePathName(path) {
      /**
       * This function make the current path to have a format similar to the
       * Strings in the tags Array of the project
       */
      if (path === '') {
        return null
      }
      return path
        .split('-')
        .map((word) => {
          return `${word[0].toUpperCase() + word.slice(1)}`
        })
        .join(' ')
    },
  },
}
</script>
