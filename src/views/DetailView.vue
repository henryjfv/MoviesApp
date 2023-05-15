<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import { getLocalStorage, setLocalStorage } from '../utils/localStorage'
import DialogLoading from '../components/DialogLoading.vue'
import Dialog from '../components/Dialog.vue'

const router = useRouter()

const _self = ref('')
_self.value = this

const items = ref([])
items.value = JSON.parse(getLocalStorage({ key: 'cart' }))

items.value?.map((e) => {
  return (e.amount = 1)
})

const buyOrRent = ref(['Buy', 'Rent'])
const buyFlag = ref('Buy')
const dialog = ref(false)

const showPayedDialog = ref(false)

const today = new Date().toJSON().slice(0, 10)

const pay = () => {
  dialog.value = !_self.dialog
  setTimeout(() => {
    dialog.value = !dialog
    showPayedDialog.value = true
    clearStorage()
  }, 2000)
}

const closeModalPayment = () => {
  showPayedDialog.value = false
  router.push('/')
}

const clearStorage = () => {
  const purchases = new Object()
  purchases.date = new Date().toDateString()
  purchases.payed = items.value
  purchases.typSale = buyFlag.value

  const itemsInCart = getLocalStorage({ key: 'purchases' })
  if (itemsInCart) {
    const arrayItems = JSON.parse(itemsInCart)
    setLocalStorage({ key: 'purchases', value: JSON.stringify([...arrayItems, purchases]) })
  } else {
    setLocalStorage({ key: 'purchases', value: JSON.stringify([purchases]) })
  }

  localStorage.removeItem('cart')
}

const addAmount = (item) => {
  return item ? item + 1 : 1
}

const decreaseAmount = (item) => {
  return item && item != 1 ? item - 1 : 1
}

const deleteItem = (item) => {
  const newArray = items.value.filter((e) => e.Title != item.Title)
  items.value = newArray
  setLocalStorage({ key: 'cart', value: JSON.stringify([...newArray]) })
  console.log('🚀 ~ file: DetailView.vue:65 ~ deleteItem ~ newArray:', newArray)
}
</script>
<template>
  <v-container class="bg-surface-variant mt-5">
    <v-row>
      <v-col cols="12" sm="8">
        <router-link to="/" class="text-decoration-none text-h6 text-grey-lighten-5">
          <v-icon> mdi-keyboard-backspace</v-icon>
          Continue Shopping
        </router-link>
        <div class="d-flex justify-space-around">
          <h1>Shopping Cart</h1>
          <h2>{{ items?.length }} Items</h2>
        </div>
        <v-divider></v-divider>
        <v-col v-for="n in items" :key="n">
          <v-row dense>
            <v-col cols="12" sm="12">
              <v-card color="bg-grey-darken-4" theme="dark">
                <div class="d-flex flex-no-wrap justify-space-between">
                  <v-avatar class="ma-3" size="125" rounded="0">
                    <v-img :src="n.Poster"></v-img>
                  </v-avatar>
                  <div>
                    <v-card-title class="text-h5">{{ n.Title }}</v-card-title>
                    <v-card-subtitle>{{ n.Year }} | {{ n.Type }}</v-card-subtitle>
                  </div>
                  <v-btn
                    class="m-5"
                    icon
                    @click="
                      () => {
                        deleteItem(n)
                      }
                    "
                  >
                    <v-icon color="red">mdi-delete</v-icon>
                  </v-btn>
                </div>
                <v-row class="mx-2">
                  <v-col cols="6" sm="6">
                    <v-text-field
                      v-show="buyFlag === 'Rent'"
                      label="Label Text"
                      :model-value="n.rentalDate"
                      :min="today"
                      type="date"
                      @change="
                        (e) => {
                          n.rentalDate = e.target.value
                        }
                      "
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6" sm="6">
                    <v-text-field type="number" v-model="n.amount" min="1">
                      <template v-slot:append>
                        <v-btn
                          icon
                          @click="
                            () => {
                              n.amount = addAmount(n.amount)
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
                              n.amount = decreaseAmount(n.amount)
                            }
                          "
                        >
                          <v-icon color="green"> mdi-minus </v-icon>
                        </v-btn>
                      </template>
                    </v-text-field>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-col>
      <v-col cols="12" sm="4">
        <h2>Summary</h2>
        <v-row>
          <v-col cols="6" sm="6">
            <div class="text-subtitle-1">What do you want to do?</div>
          </v-col>
          <v-col cols="6" sm="6">
            <v-combobox v-model="buyFlag" :items="buyOrRent" label="Do you want to buy or rent?">
            </v-combobox>
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-col cols="auto" sm="12" md="12">
            <v-btn
              v-show="items"
              block
              :disabled="dialog"
              :loading="dialog"
              color="primary"
              rounded="xl"
              size="x-large"
              class="text-none mb-4"
              variant="flat"
              @click="pay()"
            >
              Checkout
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
      <DialogLoading
        :show="dialog"
        @click="
          () => {
            dialog = !dialog
          }
        "
      />
      <Dialog :show="showPayedDialog" message="Successful Payment" :callback="closeModalPayment" />
    </v-row>
  </v-container>
</template>
