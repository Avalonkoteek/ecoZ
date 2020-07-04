import axios from "axios";
export default {
  state: {
    servicesList: [],
    mainOffer: {},
  },
  mutations: {
    SET_SERVISE: (state, payload) => {
      state.servicesList = payload.filter((item) => !item.isOffer);
      state.mainOffer = payload.filter((item) => item.isOffer)[0];
    },
  },
  actions: {
    // fetchHomePage
    async fetchServices({ commit }) {
      let ServiceList = [];
      try {
        let data = await axios
          .get("https://a.eco-z.org/wp-json/wp/v2/b2b_service")
          .then((response) => response.data);

        ServiceList = data.map((el) => {
          return {
            id: el.id,
            text: el.title.rendered,
            price: el.b2b_service_price,
            oldPrice: el.b2b_service_price2,
            isOffer: !!+el.is_main_offer,
          };
        });
        commit("SET_SERVISE", ServiceList);
      } catch (e) {
        console.log(e);
      }
      // return ServiceList;
    },
  },
  modules: {},
  getters: {
    serviseList: (s) => s.servicesList,
    mainOffer: (s) => s.mainOffer,
  },
};
