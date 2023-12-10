import { createApp } from 'vue'
import App from './App.vue'
import "./main.css"
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import router from './router/router'

const vuetify = createVuetify({
    components,
    directives,
  })
createApp(App).use(vuetify).use(router).mount('#app')
