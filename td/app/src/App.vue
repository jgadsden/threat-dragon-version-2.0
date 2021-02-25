<template>
  <Welcome msg="OWASP Threat Dragon" version="2.0" />
</template>

<script setup>
  import Welcome from './components/Welcome.vue'
  import { getVersion } from './services/HelpService'
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>