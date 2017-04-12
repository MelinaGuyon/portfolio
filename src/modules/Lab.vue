<template>
  <div id="lab">
    <div v-for="lab in datas.labs" class="lab js-slider-lab">
      <div class="lab__image__container">
        <img class="img" :src="lab.src" alt="">
      </div>
      <div class="lab__desc">
        <p class="title">{{ lab.title }}</p>
        <p class="date">Date : {{ lab.date }}</p>
        <p class="techno">Technologie : {{ lab.techno }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Grid from '../components/Grid-Component.vue'

import labDatas from '../javascript/datas/Lab-Datas'
export default {

  data () {
    return {
      datas: labDatas
    }
  },
  components: {
    'grid-component': Grid
  }
}
</script>
