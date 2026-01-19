import { createPinia } from "pinia";

import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// Add the necessary CSS
import "bootstrap-vue-next/dist/bootstrap-vue-next.css";
import "bootstrap/dist/css/bootstrap.css";

import "@/assets/css/main.css";

const app = createApp(App);
export const pinia = createPinia();

pinia.use(piniaPluginPersistedstate);

app.use(pinia);
app.use(router);
app.mount("#app");
