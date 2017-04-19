<template>
  <div class="project__header">
    <div class="project__header__desc">
      <p class="date">- {{ project.date }} -</p>
      <p class="techno">{{ project.techno }}</p>
      <br>
      <p class="text" v-html="project.desc">{{ project.desc }}</p>
      <p class="link" v-if="project.url"><a :href="project.url" target="_blank">- Voir le projet -</a></p>
      <div class="project__header__nav">
        <div class="arrow-prev js-project-slider-prev"></div>
        <div class="arrow-next js-project-slider-next"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['project']
}
</script>
