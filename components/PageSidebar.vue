<template>
  <div class="sidebar">
    <div class="sidebar-inner d-flex flex-column">
      <div class="px-4 py-5">
        <NuxtLink to="/" href=""
          ><img src="~/assets/img/mylogo.svg" alt="" width="90"
        /></NuxtLink>
      </div>
      <sidebar-menu></sidebar-menu>
      <div class="px-4 py-3">
        <ul class="list-inline list-social mb-3">
          <li class="list-inline-item">
            <a
              class="reset-anchor"
              href="https://www.instagram.com/mariaescribe/"
              target="blank"
            >
              <i class="fab fa-instagram"></i>
            </a>
          </li>
          <li class="list-inline-item">
            <a
              class="reset-anchor"
              href="https://www.linkedin.com/in/mariaescribe/"
              target="blank"
            >
              <i class="fab fa-linkedin"></i>
            </a>
          </li>
          <li class="list-inline-item">
            <a
              class="reset-anchor"
              href="https://www.behance.net/mariaescribe"
              target="blank"
            >
              <i class="fab fa-behance"></i>
            </a>
          </li>
          <li class="list-inline-item">
            <a
              class="reset-anchor"
              href="https://vm.tiktok.com/ZM83vpCnP/"
              target="blank"
            >
              <i class="fab fa-tiktok"></i>
            </a>
          </li>
          <li class="list-inline-item">
            <a class="reset-anchor" href="mailto:mariaescribemails@gmail.com">
              <i class="fas fa-envelope"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'PageSidebar',
}
</script>

