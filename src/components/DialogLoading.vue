<script default>
export default {
  props: ['show'],
  data: () => {
    dialog: false
  },
  watch: {
    dialog(val) {
      setTimeout(() => (this.dialog = false), 4000)
    },
    show(val) {
      this.dialog = val
    }
  }
}
</script>

<template>
  <div class="text-center">
    <v-dialog v-model="dialog" :scrim="false" persistent width="auto">
      <v-card color="primary">
        <v-card-text>
          Please stand by
          <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>
