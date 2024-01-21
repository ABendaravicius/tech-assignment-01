import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
/* Font Awesome integration */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBuildingColumns, faFishFins, faHippo, faRotateRight, faStar, faWater } from '@fortawesome/free-solid-svg-icons'
import {  } from '@fortawesome/free-regular-svg-icons'

library.add(faBuildingColumns, faFishFins, faHippo, faRotateRight, faStar, faWater)

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
