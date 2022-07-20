import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueParticles from "vue-particles";
import VueCompositionAPI from "@vue/composition-api";
import { MotionPlugin } from "@vueuse/motion";

Vue.use(VueCompositionAPI);
Vue.use(VueParticles);
Vue.use(MotionPlugin);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
