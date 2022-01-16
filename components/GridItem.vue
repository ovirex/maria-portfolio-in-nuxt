<template>
  <div class="col-lg-4 col-md-6 grid-item mb-4">
    <div class="listing-item">
      <div class="position-relative">
        <NuxtLink
          class="reset-anchor d-block listing-img-holder is-loading"
          :to="'/works/' + project.id"
        >
          <!-- Loading spinner -->
          <div class="lds-spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <!-- End of Loading spinner -->

          <img class="img-fluid" :src="project.thumbnail" alt="" />
          <p
            class="
              mb-0
              text-primary
              small
              d-flex
              align-items-center
              listing-btn
            "
          >
            <span>Look inside</span>
            <svg class="svg-icon text-primary svg-icon-sm ml-2">
              <use xlink:href="#arrow-right-1"></use>
            </svg>
          </p>
        </NuxtLink>
      </div>
      <div class="py-3">
        <NuxtLink class="reset-anchor" :to="'/works/' + project.id">
          <h2 class="h5 listing-item-heading" translate="no">
            {{ project.title }}
          </h2>
        </NuxtLink>
        <p class="text-small mb-0 listing-item-description">
          {{ project.short_description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GridItem',
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    this.masonryDistribution()
  },
  updated() {
    this.masonryDistribution(true)
  },
  methods: {
    masonryDistribution(reload = false) {
      $(document).ready(function () {
        const $grid = $('.masonry-wrapper')
        if (!reload) {
          $grid.masonry({
            itemSelector: '.grid-item',
            columnWidth: '.grid-item',
            percentPosition: true,
            transitionDuration: 300,
          })
          $grid.imagesLoaded().progress(function (imgLoad, image) {
            const $item = $(image.img).parent()
            $item.removeClass('is-loading')
            if (!image.isLoaded) {
              $item.addClass('is-broken')
            }

            $grid.masonry()
          })
        } else {
          $grid.masonry('reloadItems')
        }
      })
    },
  },
}
</script>
