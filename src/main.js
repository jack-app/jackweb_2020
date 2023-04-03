import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import vuescrollto from "./plugins/vue-scrollto";

Vue.config.productionTip = false;

new Vue({
  vuetify,
  vuescrollto,
  router,
  render: (h) => h(App),
}).$mount("#app");
