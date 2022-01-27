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

      const tag = this.convertPathToLowerCase(this.path)

      if (tag === null) {
        this.projectsToShow = this.projects
      } else {
        this.projectsToShow = this.projects.filter((project) => {
          const projectsTag = project.project_tags.map((ele) => {
            /** Tranform the projects tags to lowerCase so it can
             *  match with the tag variable format
             */
            return ele.toLowerCase()
          })
          return projectsTag.includes(tag)
        })
      }
    },
    /**
     * This function return the current path with a format similar to the
     * Strings in the projects_tags Array of the project.
     * e.g: from web-design to web design
     */
    convertPathToLowerCase(path) {
      if (path === '') {
        return null
      }
      return path.split('-').join(' ').toLowerCase()
    },
  },
}
</script>
