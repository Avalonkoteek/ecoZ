import Vue from "vue";
import Vuex from "vuex";
import mainPage from "./modules/mainPage";
import sevices from "./modules/sevices";
import template from "./modules/template";
import partners from "./modules/partners";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    mainPage,
    sevices,
    template,
    partners,
  },
});
