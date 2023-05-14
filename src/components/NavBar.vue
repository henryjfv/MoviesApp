<template>
  <nav>
    <v-app-bar app color="grey-darken-3" dark>
      <v-icon color="red-lighten-1" class="ml-2">mdi-movie-roll</v-icon>
      <v-toolbar-title
        @click="
          () => {
            this.$router.push('/')
          }
        "
        >Henry Movies</v-toolbar-title
      >
      <v-btn
        text
        class="ml-2"
        @click="
          () => {
            this.$router.push('/detail')
          }
        "
      >
        Shopping Cart
        <v-badge color="red" :content="badgeCounter" overlap>
          <v-icon class="ml-2"> mdi-cart-outline</v-icon>
        </v-badge>
      </v-btn>
    </v-app-bar>
  </nav>
</template>
<script default>
import { getLocalStorage } from '../utils/localStorage'
export default {
  data: () => {
    itemsOnCart: 0
  },
  methods: {
    getItems() {
      const items = JSON.parse(getLocalStorage({ key: 'cart' }))
      return items
    }
  },
  mounted() {},
  computed: {
    badgeCounter() {
      const items = this.getItems()
      return items?.length
    }
  }
}
</script>
