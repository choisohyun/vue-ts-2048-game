import Vue, { VNode } from "vue";
import App from "./App.vue";
import store from "./store";

const vue = new Vue({
  store,
  render: (h): VNode => h(App)
}).$mount("#app");

export default vue;
