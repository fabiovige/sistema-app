import {createApp} from 'vue'
import App from './App.vue'
import store from './store/index'
import router from './router/index'
import Paginate from 'vuejs-paginate-next'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './assets/css/style.css'

const app = createApp(App)
app.use(Paginate)
app.use(store)
app.use(router)
app.mount('#app')
