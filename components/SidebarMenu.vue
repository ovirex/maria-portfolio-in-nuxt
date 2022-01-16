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
          to="/social-media-design"
          >Social Media Design</NuxtLink
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
          to="/web-design"
          >Web Design</NuxtLink
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
          to="/art-direction"
          >Art Direction</NuxtLink
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
}
</script>
