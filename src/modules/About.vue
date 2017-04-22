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
        <p class="about__desc__about">If you’d like to chat <a href="" href="mailto:guyonmelina@gmail.com" target="_blank">contact me.</a></p>
        <p class="about__desc__about">You can also find me there : <a href="https://twitter.com/MelinaGuyon" target="_blank">Twitter</a> - <a href="https://github.com/MelinaGuyon" target="_blank">GiHub</a> - <a href="http://codepen.io/MelinaGuyon/" target="_blank">CodePen</a></p>
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
