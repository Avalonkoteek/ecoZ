import axios from "axios";
export default {
  state: {
    servicesList: [],
  },
  mutations: {
    setServise: (state, payload) => {
      state.servicesList = payload;
    },
  },
  actions: {
    // fetchHomePage
    async fetchServices({ commit }) {
      let ServiceList = [];
      try {
        let data = await axios
          .get("https://eco-z.org/wp-json/wp/v2/b2b_service")
          .then((response) => response.data);

        ServiceList = data.map((el) => {
          return {
            id: el.id,
            text: el.title.rendered,
            price: el.b2b_service_price,
            oldPrice: el.b2b_service_price2,
          };
        });
        commit("setServise", ServiceList);
      } catch (e) {
        console.log(e);
      }
      return ServiceList;
    },
  },
  modules: {},
  getters: {
    serviseList: (s) => s.servicesList,
  },
};
