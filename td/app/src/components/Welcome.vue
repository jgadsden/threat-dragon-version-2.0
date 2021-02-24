<template>
  <h1>{{ msg }}</h1>

  <p>
    <a href="https://threatdragon.github.io/" target="_blank">Threat Dragon Documentation</a> |
    <a href="https://owasp.org/www-project-threat-dragon/" target="_blank">OWASP project page</a>
  </p>

</template>

<script setup>
import { defineProps, reactive } from 'vue'

defineProps({
  msg: String
})

const state = reactive({ count: 0 })
</script>

<style scoped>
a {
  color: #42b983;
}
</style>