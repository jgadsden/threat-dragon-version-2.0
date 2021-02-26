<template>
  <div>
    <img alt="Vue logo" src="../assets/images/threatdragonx256.png" />
    <h1 v-once>{{ msg }} {{ version }}</h1>

    <p>
      <a href="https://threatdragon.github.io/" target="_blank">Threat Dragon Documentation</a> |
      <a href="https://owasp.org/www-project-threat-dragon/" target="_blank">OWASP project page</a>
    </p>
  </div>
</template>

<script setup>
import { defineProps, reactive } from 'vue'

defineProps({
  msg: String,
  version: String
})

</script>

<style scoped>
a {
  color: #42b983;
}
</style>