<script setup>
import { getMovies } from './../services/movies'
import MovieCard from '../components/MovieCard.vue'
import Dialog from '../components/Dialog.vue'

import { ref, onMounted } from 'vue'

const query = ref('')
const movies = ref([])
const dialog = ref(false)
const snackbar = ref(false)
const numberPage = ref(1)

const searchMovie = async () => {
  try {
    const { Search, Response } = await getMovies({ query: query.value, page: numberPage.value })
    if (Response === 'False') {
      dialog.value = true
      movies.value = []
    } else {
      movies.value = Search?.sort((a, b) => parseInt(b?.Year) - parseInt(a?.Year))
    }
  } catch (error) {
    dialog.value = true
  }
}

const closeModal = async () => {
  dialog.value = false
}

onMounted(() => {
  query.value = 'Harry potter'
  searchMovie()
})

const addedToCart = (e) => {
  snackbar.value = e
}

const nextPage = () => {
  numberPage.value += 1
  searchMovie()
}
const previousPage = () => {
  if (numberPage.value > 1) numberPage.value -= 1
  searchMovie()
}

const keyUpEnter = () => {
  numberPage.value = 1
  searchMovie()
}
</script>
<template>
  <Dialog :show="dialog" message="Error getting list. Try again" :callback="closeModal" />
  <v-container class="align-center justify-center">
    <v-snackbar v-model="snackbar" vertical location="top" color="success">
      <div class="text-subtitle-1 pb-2">Item added to cart</div>
    </v-snackbar>
    <v-row class="mt-2">
      <v-col cols="7" sm="7"></v-col>
      <v-col cols="12" sm="4">
        <v-text-field
          dark
          label="Search a movie and press enter key"
          v-model="query"
          @keyup.enter="keyUpEnter"
          hide-details="auto"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <div v-if="movies?.length > 0">
        <v-row>
          <v-col v-for="n in movies" :key="n">
            <MovieCard :movie="n" @onAddedToCart="addedToCart" />
          </v-col>
        </v-row>
      </div>

      <v-col v-else cols="12" sm="12" class="d-flex align-center justify-center mb-6">
        <h1 style="color: #fff">Nothing to show</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="12" class="align-center justify-center d-flex mt-5">
        <v-btn class="ma-2 pa-2" icon @click="previousPage" :disabled="numberPage === 1">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        <v-btn class="ma-2 pa-2" icon @click="nextPage">
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
