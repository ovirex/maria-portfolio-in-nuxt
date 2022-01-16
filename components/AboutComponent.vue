<template>
  <div>
    <about-description></about-description>
    <h2 class="h1 mb-4">Work experience</h2>
    <div class="row mb-4">
      <about-skill
        skill="Graphic Designer"
        desc="From social media to flyers. Set the visual tone for brands in digital and print media."
        svg-icon="#stack-1"
      ></about-skill>
      <about-skill
        skill="Web Designer"
        desc="Wireframing and prototyping. Create the website structure and the user interface."
        svg-icon="#laptop-screen-1"
      ></about-skill>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutComponent',
}
</script>
