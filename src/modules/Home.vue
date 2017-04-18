<template>
  <div id="home">
    <section class="home">
      <div class="home__container">
        <img src="http://localhost:3000/assets/white-logo.png" class="home__container__logo "alt="">
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
