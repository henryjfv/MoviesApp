<script setup>
import Purchases from '../components/Purchases.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const dialog = ref(false)

const eventCloseDialog = (e) => {
  dialog.value = false
}

const openModal = () => {
  dialog.value = true
}
</script>

<template>
  <nav>
    <v-app-bar app color="grey-darken-3" dark>
      <v-icon color="red-lighten-1" class="ml-2">mdi-movie-roll</v-icon>
      <v-toolbar-title
        @click="
          () => {
            router.push('/')
          }
        "
        >Henry Movies</v-toolbar-title
      >
      <v-btn
        text
        class="ml-2"
        @click="
          () => {
            router.push('/detail')
          }
        "
      >
        Shopping Cart
        <v-icon class="ml-2"> mdi-cart-outline</v-icon>
      </v-btn>
      <v-btn @click="openModal()">
        <v-icon>mdi-view-list</v-icon>
      </v-btn>
    </v-app-bar>
    <Purchases :show="dialog" @onClose="eventCloseDialog" />
  </nav>
</template>
