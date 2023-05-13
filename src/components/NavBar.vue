<template>
  <nav>
    <v-app-bar app color="grey-darken-3" dark>
      <v-icon class="ml-2">mdi-movie-roll</v-icon>
      <v-toolbar-title>Henry Movies</v-toolbar-title>
      <v-autocomplete
        clearable
        hide-data
        hide-selected
        color="white"
        label="Search"
        prepend-inner-icon="search"
        flat
      ></v-autocomplete>
      <v-btn text class="ml-2">
        Shopping Cart
        <v-badge color="red" content="2" overlap>
          <v-icon class="ml-2"> mdi-cart-outline</v-icon>
        </v-badge>
      </v-btn>
    </v-app-bar>
  </nav>
</template>
<script default></script>
