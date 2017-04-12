<template>
  <div id="project">
    <grid-component></grid-component>
    <div v-for="project in datas.projects" class="project-container js-slider-project">
      <div class="project__title">
        <title-project-component :project="project"></title-project-component>
      </div>
      <div class="project">
        <context-project-component :project="project"></context-project-component>
        <images-project-component :project="project"></images-project-component>
      </div>
    </div>
  </div>
</template>

<script>
import Grid from '../components/Grid-Component.vue'
import TitleProject from '../components/Title-Project-Component.vue'
import ContextProject from '../components/Context-Project-Component.vue'
import ImagesProject from '../components/Images-Project-Component.vue'

import projectDatas from '../javascript/datas/Project-Datas'

export default {
  data () {
    return {
      datas: projectDatas
    }
  },
  components: {
    'grid-component': Grid,
    'title-project-component': TitleProject,
    'context-project-component': ContextProject,
    'images-project-component': ImagesProject
  }
}
</script>
