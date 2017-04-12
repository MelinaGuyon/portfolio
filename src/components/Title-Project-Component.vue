<template>
  <div>
    <p class="type"><span>-</span><span class="title">Projet</span><span>-</span></p>
    <p class="name">{{ project.title }}</p>
  </div>
</template>

<script>
export default {
  props: ['project']
}
</script>
