<template>
  <div id="about">
    <div class="about">
      <div class="about__title">
        <span>-</span><span class="title">{{ datas.title }}</span><span>-</span>
      </div>
      <div class="about__desc">
        <div class="about__desc__logo">
          <img :src="datas.srcLogo" alt="">
        </div>
        <p class="about__desc__about" v-html="datas.desc">{{ datas.desc }}</p>
        <br>
        <p class="about__desc__about">melina.guyon@gmail.com</p>
      </div>
    </div>
  </div>
</template>

<script>
import aboutDatas from '../javascript/datas/About-Datas'

export default {
  data () {
    return {
      datas: aboutDatas
    }
  }
}
</script>
