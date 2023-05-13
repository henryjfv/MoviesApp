<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Toolbar from './components/ToolbarApp.vue'
</script>
<template>
  <Toolbar />
  <RouterView />
</template>

<style scoped>
* {
  background-color: #212121;
}
</style>
