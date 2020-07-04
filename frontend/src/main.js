import Vue from "vue";
import Vuelidate from "vuelidate";
import VueMeta from "vue-meta";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import titlePlugin from "./utils/title.plugin";
import Multiselect from "vue-multiselect";

import "vue-multiselect/dist/vue-multiselect.min.css";

Vue.config.productionTip = false;
Vue.component("Multiselect", Multiselect);
Vue.use(Vuelidate);
Vue.use(VueMeta);
Vue.use(titlePlugin);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
