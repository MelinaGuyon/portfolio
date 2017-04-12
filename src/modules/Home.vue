<template>
  <div id="home">
    <grid-component></grid-component>
    <section class="home">
      <div class="home__container">
        <slider-home-component></slider-home-component>
      </div>
    </section>
  </div>
</template>

<script>
import Grid from '../components/Grid-Component.vue'
import Slider from '../components/Slider-Home-Component.vue'

export default {
  components: {
    'grid-component': Grid,
    'slider-home-component': Slider
  }
}
</script>
