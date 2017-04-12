<template>
  <div class="project__header">
    <div class="project__header__desc">
      <p class="date">- {{ project.date }} -</p>
      <p>{{ project.techno }}</p>
      <br>
      <p v-html="project.desc">{{ project.desc }}</p>
      <br>
      <p>melina.guyon@gmail.com</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['project']
}
</script>
