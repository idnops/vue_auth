import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { authPlugin } from "../src";
import router from "./router";

const app = createApp(App);

app.use(authPlugin, { router });
app.use(router);

app.mount("#app");
