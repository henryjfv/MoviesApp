<template>
  <v-footer class="bg-grey-darken-3 text-center d-flex flex-column">
    <div flat tile class="white--text text-conter">
      <v-card-text>
        <v-btn class="mx-4 white--text" icon>
          <v-icon size="24px">mdi-linkedin</v-icon>
        </v-btn>
        <v-btn class="mx-4 white--text" icon>
          <v-icon size="24px">mdi-github</v-icon>
        </v-btn>
        <v-btn class="mx-4 white--text" icon>
          <v-icon size="24px">mdi-twitter</v-icon>
        </v-btn>
      </v-card-text>
      <v-card-text class="white--text pt-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a felis ex. Suspendisse eu
        sem sit amet dolor mattis ultricies sit amet at neque. Donec pellentesque nulla malesuada,
        iaculis dui non, condimentum erat. Phasellus condimentum ornare nunc eu tempor. Nullam
        finibus, nisi et malesuada euismod, justo est facilisis purus, a tristique nibh ex vel enim.
        Aliquam vitae tortor mattis, mollis massa ultrices, mattis justo. Phasellus mattis arcu a
        felis convallis semper.
      </v-card-text>
      <v-divider></v-divider>
      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} - <strong>HENRY FERNANDEZ</strong>
      </v-card-text>
    </div>
  </v-footer>
</template>
<script default></script>
