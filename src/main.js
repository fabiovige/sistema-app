import {createApp} from 'vue'
import App from './App.vue'
import Paginate from 'vuejs-paginate-next'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const app = createApp(App)
app.use(Paginate)
app.mount('#app')
