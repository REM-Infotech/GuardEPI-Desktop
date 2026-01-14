import { createPinia } from "pinia";
// main.ts
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// Add the necessary CSS
import "bootstrap-vue-next/dist/bootstrap-vue-next.css";
import "bootstrap/dist/css/bootstrap.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
