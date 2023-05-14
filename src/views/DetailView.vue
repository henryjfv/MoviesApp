<template>
  <v-container class="bg-surface-variant mt-5">
    <v-row>
      <v-col cols="12" sm="8">
        <div class="d-flex justify-space-between">
          <h1>Shopping Cart</h1>
          <h2>{{ items.length }} Items</h2>
        </div>
        <v-divider></v-divider>
        <v-col v-for="n in items" :key="n">
          <v-row dense>
            <v-col cols="12">
              <v-card color="bg-grey-darken-4" theme="dark">
                <div class="d-flex flex-no-wrap justify-space-around">
                  <v-avatar class="ma-3" size="125" rounded="0">
                    <v-img :src="n.Poster"></v-img>
                  </v-avatar>
                  <div>
                    <v-card-title class="text-h5">{{ n.Title }}</v-card-title>
                    <v-card-subtitle>{{ n.Year }} | {{ n.Type }}</v-card-subtitle>
                    <v-row>
                      <v-col cols="6" sm="6">
                        <v-text-field type="number" v-model="counter">
                          <template v-slot:append>
                            <v-btn
                              icon
                              @click="
                                () => {
                                  counter += 1
                                }
                              "
                            >
                              <v-icon color="red"> mdi-plus </v-icon>
                            </v-btn>
                          </template>
                          <template v-slot:prepend>
                            <v-btn
                              icon
                              @click="
                                () => {
                                  counter -= 1
                                }
                              "
                            >
                              <v-icon color="green"> mdi-minus </v-icon>
                            </v-btn>
                          </template>
                        </v-text-field>
                      </v-col>
                      <v-col cols="6" sm="6">
                        <v-text-field
                          label="Label Text"
                          :model-value="date"
                          type="date"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </div>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-col>
      <v-col cols="12" sm="4">
        <h2>Summary</h2>
        <v-row justify="center">
          <v-col cols="12" sm="6" md="4">
            <v-btn block rounded="0" size="x-large">Pay</v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>
import { ref } from 'vue'
import { getLocalStorage } from '../utils/localStorage'

const items = ref([])
items.value = JSON.parse(getLocalStorage({ key: 'cart' }))
console.log('🚀 ~ file: DetailView.vue:24 ~ items:', items)
const counter = ref(0)

const date = ref('')
</script>
