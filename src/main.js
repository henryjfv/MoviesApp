import 'vuetify/styles'

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, md } from 'vuetify/iconsets/md'
import { fa } from "vuetify/iconsets/fa";

import "@mdi/font/css/materialdesignicons.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const vuetify = createVuetify({
    icons: {
        defaultSet: "mdi",
        aliases,
        sets: {
            md,
            fa,
        },
    },
    components,
    directives
})

const app = createApp(App)

app.use(vuetify)
app.use(router)

app.mount('#app')