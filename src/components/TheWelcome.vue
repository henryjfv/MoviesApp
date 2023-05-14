<script>
import { getMovies } from './../services/movies'
import MovieCard from '../components/MovieCard.vue'
export default {
  components: {
    MovieCard
  },
  data: () => ({
    query: '',
    movies: []
  }),
  async mounted() {
    this.query = 'Harry potter'
    this.searchMovie()
  },
  methods: {
    async searchMovie() {
      const { Search } = await getMovies({ query: this.query })
      this.movies = Search?.sort((a, b) => parseInt(b?.Year) - parseInt(a?.Year))
    }
  }
}
</script>
<template>
  <v-container class="align-center justify-center">
    <v-row>
      <v-col cols="12" sm="4">
        <v-text-field
          dark
          label="Search a movie and press enter key"
          v-model="query"
          @keyup.enter="searchMovie()"
          hide-details="auto"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <div v-if="movies?.length > 0">
        <v-row>
          <v-col v-for="n in movies" :key="n">
            <MovieCard :movie="n" />
          </v-col>
        </v-row>
      </div>
      <div v-else>
        <h1 style="color: #fff">Nothing to show</h1>
      </div>
    </v-row>
  </v-container>
</template>
<style scoped></style>
