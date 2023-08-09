import { createApp } from "vue";
import App from "./App.vue";
import store from "./store/index";
import router from "./router/index";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./assets/css/style.css";

const app = createApp(App);
app.use(store);
app.use(router);
app.mount("#app");
