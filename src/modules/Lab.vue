<template>
  <div id="lab">
    <div v-for="lab in datas.labs" class="lab js-slider-lab">
      <div class="lab__video__container">
        <video :src="lab.src" poster="" loop>
          Votre navigateur ne permet pas de lire les vidéos.
          Mais vous pouvez toujours aller voir l'xp sur
          <a href="http://codepen.io/MelinaGuyon/pen/QpmwwO">code pen</a> !
        </video>
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
