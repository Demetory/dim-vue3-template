// Core
import { createApp } from "vue";
import App from "@/App.vue";

// Pinia
import { createPinia } from "pinia";

// Router
import router from "@/router";

// Axios
import axios from "axios";
import VueAxios from "vue-axios";

// Global CSS
import "@/assets/scss/_core/_index.scss";
import "@/assets/scss/theme/style.theme.scss";

// Create App
const app = createApp(App);

// Use Modules
app.use(createPinia());
app.use(VueAxios, axios);
app.use(router);

// Mount
app.mount("#app");
