<script default>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    NavBar,
    Footer
  }
}
</script>
<template>
  <v-app>
    <NavBar />
    <v-main class="bg-grey-darken-4">
      <RouterView />
    </v-main>
    <Footer />
  </v-app>
</template>

<style scoped></style>
