<template>
  <div id="lab">
    <div v-for="lab in datas.labs" class="lab js-slider-lab">
      <div class="lab__image__container">
        <img class="img" :src="lab.src" alt="">
      </div>
      <div class="lab__desc">
        <div class="desc">
          <p class="title">{{ lab.title }}</p>
          <p class="date">Date : {{ lab.date }}</p>
          <p class="techno">Technologie : {{ lab.techno }}</p>
        </div>
        <div class="lab__desc__nav">
          <div class="arrow-prev js-lab-slider-prev"></div>
          <div class="arrow-next js-lab-slider-next"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import labDatas from '../javascript/datas/Lab-Datas'
export default {

  data () {
    return {
      datas: labDatas
    }
  }
}
</script>
