<template>
  <v-hover v-slot="{ isHovering }" open-delay="200">
    <v-card class="mx-auto" color="bg-grey-darken-4" v-bind="props">
      <v-img min-width="500" :aspect-ratio="1 / 1" :src="movie?.Poster" :alt="movie?.title" cover>
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular indeterminate color="grey-lighten-5"></v-progress-circular>
          </v-row>
        </template>
        <v-expand-transition>
          <div
            v-if="isHovering"
            class="d-flex transition-fast-in-fast-out bg-orange-darken-2 v-card--reveal text-h2"
            style="height: 100%"
          >
            Add to Cart
          </div>
        </v-expand-transition>
      </v-img>

      <v-card-text class="pt-6">
        <div class="text-h6 font-weight-light text-grey-darken-4 mb-2">
          {{ movie?.Title }}
        </div>
        <div class="font-weight-light text-grey-darken-2 mb-2">
          {{ movie?.Year }} | {{ movie?.Type }}
        </div>
      </v-card-text>
    </v-card>
  </v-hover>
</template>
<script default>
export default {
  props: {
    movie: {
      required: true
    }
  }
}
</script>
