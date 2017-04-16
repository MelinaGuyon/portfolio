<template>
  <div id="home">
    <section class="home">
      <div class="home__container">
        <slider-home-component></slider-home-component>
      </div>
    </section>
  </div>
</template>

<script>
import Slider from '../components/Slider-Home-Component.vue'

export default {
  components: {
    'slider-home-component': Slider
  }
}
</script>
