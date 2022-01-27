<template>
  <div class="sidebar-menu-holder flex-grow-1">
    <ul class="sidebar-menu list-unstyled">
      <li class="mb-2 pb-1">
        <!-- Link--><NuxtLink
          class="
            sidebar-link
            h6
            text-uppercase
            letter-spacing-2
            font-weight-bold
            text-small
          "
          to="/"
          >Home</NuxtLink
        >
      </li>
      <li v-for="(option, index) in menuOptions" :key="index" class="mb-2 pb-1">
        <NuxtLink
          class="
            sidebar-link
            h6
            text-uppercase
            letter-spacing-2
            font-weight-bold
            text-small
          "
          :to="`/${option.link}`"
          >{{ option.title }}</NuxtLink
        >
      </li>
      <li class="mb-2 pb-1">
        <!-- Link--><NuxtLink
          class="
            sidebar-link
            h6
            text-uppercase
            letter-spacing-2
            font-weight-bold
            text-small
          "
          to="/about"
          >About</NuxtLink
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SidebarMenu',
  data() {
    return {
      menuOptions: [],
    }
  },
  async fetch() {
    try {
      const siteMenuOptions = await this.$content('menu_options')
        .only(['menu_options_list'])
        .fetch()

      this.menuOptions = siteMenuOptions[0].menu_options_list.map((option) => {
        const menuOptionsObject = {
          title: option.title,
          link: this.makeLinkFromTitle(option.title),
        }
        return menuOptionsObject
      })
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err)
    }
  },
  methods: {
    makeLinkFromTitle(title) {
      return title.split(' ').join('-').toLowerCase()
    },
  },
}
</script>
