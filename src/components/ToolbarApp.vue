<script>
export default {
  data: () => ({
    query: '',
    showSearchInput: false
  }),
}
</script>
<template>
  <v-card color="transparent" flat rounded="0">
    <v-toolbar density="compact">
      <v-toolbar-title>MoviesApp</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-text-field v-show="showSearchInput"></v-text-field>

      <v-btn icon @click="showSearchInput = !showSearchInput">
        <v-icon v-show="!showSearchInput">mdi-magnify</v-icon>
        <v-icon v-show="showSearchInput">mdi-close</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-web-box</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-theme-light-dark</v-icon>
      </v-btn>
    </v-toolbar>
  </v-card>
</template>
