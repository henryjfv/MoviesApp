<script>
import { getMovies } from './../services/movies'
export default {
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
  <div v-if="movies.length > 0">
    <v-row>
      <v-col v-for="n in movies" :key="n" class="d-flex child-flex" cols="4">
        <v-img :src="n?.Poster" style="margin: 30px" aspect-ratio="1" class="bg-grey-darken-4">
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular indeterminate color="grey-lighten-5"></v-progress-circular>
            </v-row>
          </template>
          <p style="backdrop-filter: blur(10px); color: white">{{ n?.Title }}</p>
        </v-img>
      </v-col>
    </v-row>
  </div>
  <div v-else>
    <h1 style="color: #fff">Nothing to show</h1>
  </div>
</template>
<style scoped></style>
