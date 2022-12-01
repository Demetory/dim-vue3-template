// Core
import { createApp } from "vue";
import App from "@/App.vue";

// Pinia
import { createPinia } from "pinia";
import router from "@/router";

// Axios
import axios from "axios";
import VueAxios from "vue-axios";

// Global CSS
import "@/assets/scss/index.scss";

// Create App
const app = createApp(App);

// Use Modules
app.use(createPinia());
app.use(VueAxios, axios);
app.use(router);

// Mount
app.mount("#app");
