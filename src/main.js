import Vue from "vue";
import App from "./App.vue";
import { routes } from "./routes";
import VueRouter from "vue-router";
import VueResource from "vue-resource";

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({ routes, mode: "history" });
export const eventBus = new Vue();
new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
