<script default>
import { getLocalStorage } from '../utils/localStorage'

export default {
  props: ['show', 'items'],
  data() {
    return {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
      items: [],
      counter: 0
    }
  },
  methods: {
    getItems() {
      const items = JSON.parse(getLocalStorage({ key: 'purchases' }))
      this.items = items
    }
  },
  watch: {
    show(val) {
      if (val) this.getItems();
      this.dialog = val
    }
  },
  mounted() {}
}
</script>
<style>
.dialog-bottom-transition-enter-active,
.dialog-bottom-transition-leave-active {
  transition: transform 0.2s ease-in-out;
}
</style>
<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" fullscreen :scrim="false" transition="dialog-bottom-transition">
      <v-card>
        <v-toolbar dark color="red-lighten-1">
          <v-btn
            icon
            dark
            @click="
              () => {
                dialog = false
                this.$emit('onClose', false)
              }
            "
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Purchases</v-toolbar-title>
        </v-toolbar>

        <v-expansion-panels variant="popout" class="pa-4" v-if="items?.length > 0">
          <v-expansion-panel v-for="(sale, i) in items" :key="i" hide-actions>
            <v-expansion-panel-title>
              <v-row align="center" class="spacer" no-gutters>
                <v-col class="hidden-xs-only text-left ms-2" sm="5" md="3">
                  <strong>{{ sale?.date }}</strong>
                </v-col>

                <v-col class="text-no-wrap text-left" cols="5" sm="3">
                  <v-chip color="green-lighten-1" class="ms-0 me-2" label small>
                    {{ sale?.payed.length }}
                  </v-chip>
                  <strong>Bought Items</strong>
                </v-col>

                <v-col class="text-medium-emphasis text-truncate hidden-sm-and-down">
                  {{ sale?.typSale }}
                </v-col>
              </v-row>
            </v-expansion-panel-title>

            <v-expansion-panel-text>
              <v-list lines="three">
                <v-list-item
                  v-for="item in sale?.payed"
                  :key="item.Title"
                  :title="item.Title"
                  :prepend-avatar="item.Poster"
                >
                  <v-divider></v-divider>
                  <v-sheet>
                    <strong>Year</strong>
                    {{ item.Year }}
                  </v-sheet>
                  <v-sheet>
                    <strong>Type</strong>
                    {{ item.Type }}
                  </v-sheet>
                  <v-sheet>
                    <strong>Amount</strong>
                    {{ item?.amount }}
                  </v-sheet>
                  <v-sheet v-if="item?.rentalDate">
                    <strong> Rental Date </strong>
                    {{ item?.rentalDate }}
                  </v-sheet>
                </v-list-item>
              </v-list>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>

        <v-row v-else>
          <v-col cols="12" sm="12" class="d-flex align-center justify-center mb-6">
            <div class="text-h4">You don't have any purchase yet</div>
          </v-col>
        </v-row>
      </v-card>
    </v-dialog>
  </v-row>
</template>
