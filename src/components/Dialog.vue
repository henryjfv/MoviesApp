<script>
export default {
  props: ['show', 'message', 'callback'],
  data() {
    return {
      dialog: false
    }
  },
  watch: {
    show(val) {
      this.dialog = val
    }
  }
}
</script>
<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent width="300">
      <v-card>
        <v-card-text>{{ message }}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green-darken-1" variant="text" @click="callback()"> Accept </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
