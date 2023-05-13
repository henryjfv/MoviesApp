<script setup>
import { RouterLink, RouterView } from 'vue-router'

import Toolbar from './components/toolbar'
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
