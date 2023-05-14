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
  <input type="text" />
  <v-text-field
    dark
    label="Search a movie"
    v-model="query"
    @keyup.enter="searchMovie()"
    :rules="rules"
    hide-details="auto"
  ></v-text-field>
  <v-container fluid>
    <div v-if="movies.length > 0">
      <v-row>
        <v-col v-for="n in movies" :key="n" class="d-flex child-flex" cols="10" sm="3">
          <MovieCard :movie="n" />
        </v-col>
      </v-row>
    </div>
    <div v-else>
      <h1 style="color: #fff">Nothing to show</h1>
    </div>
  </v-container>
</template>
<style scoped></style>
