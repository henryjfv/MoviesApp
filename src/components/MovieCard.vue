<template>
  <div>
    <v-hover v-slot="{ isHovering, props }">
      <v-card v-bind="props" color="#424242" theme="dark" max-width="500">
        <v-img
          min-width="400"
          min-height="600"
          :aspect-ratio="1 / 1"
          :src="movie?.Poster"
          :alt="movie?.title"
          cover
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular indeterminate color="grey-lighten-5"></v-progress-circular>
            </v-row>
          </template>
          <v-expand-transition>
            <div
              v-if="isHovering"
              class="d-flex transition-fast-in-fast-out bg-red-lighten-1 v-card--reveal text-h6 justify-center align-center"
              style="height: 100%"
            >
              <p class="ma-2 pa-2">Add to Cart</p>
              <v-btn
                icon
                @click="
                  () => {
                    setItemToShoppingCart()
                  }
                "
              >
                <v-icon> mdi-cart-outline</v-icon>
              </v-btn>
            </div>
          </v-expand-transition>
        </v-img>
        <v-card-text class="pt-6">
          <div class="text-h6 font-weight-light mb-2">
            {{ movie?.Title }}
          </div>
          <div class="font-weight-light mb-2">{{ movie?.Year }} | {{ movie?.Type }}</div>
        </v-card-text>
      </v-card>
    </v-hover>
  </div>
</template>
<script default>
import { setLocalStorage, getLocalStorage } from '../utils/localStorage'
export default {
  props: {
    movie: {
      required: true
    }
  },
  methods: {
    setItemToShoppingCart() {
      const itemsInCart = getLocalStorage({ key: 'cart' })
      if (itemsInCart) {
        const arrayItems = JSON.parse(itemsInCart)
        setLocalStorage({ key: 'cart', value: JSON.stringify([...arrayItems, this.movie]) })
        
      } else {
        setLocalStorage({ key: 'cart', value: JSON.stringify([this.movie]) })
      }
    }
  }
}
</script>
