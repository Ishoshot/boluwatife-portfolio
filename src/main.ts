import { createApp } from "vue";
import { createHead } from "@unhead/vue/client";
import { MotionPlugin } from "@vueuse/motion";
import router from "./router";
import "./style.css";
import App from "./App.vue";

const app = createApp(App);
const head = createHead();

app.use(router);
app.use(head);
app.use(MotionPlugin);
app.mount("#app");
