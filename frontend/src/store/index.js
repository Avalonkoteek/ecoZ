import Vue from "vue";
import Vuex from "vuex";
import mainPage from "./modules/mainPage";
import sevices from "./modules/sevices";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    mainPage,
    sevices,
  },
});
