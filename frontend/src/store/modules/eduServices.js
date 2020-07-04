import axios from "axios";
export default {
  state: {
    eduServicesList: [],
    eduMainOffer: {},
  },
  mutations: {
    SET_EDU_SERVISE: (state, payload) => {
      state.eduServicesList = payload.filter((item) => !item.isOffer);
      state.eduMainOffer = payload.filter((item) => item.isOffer)[0];
    },
  },
  actions: {
    // fetchHomePage
    async fetchEduServices({commit}) {
      let ServiceList = [];
      try {
        let data = await axios
          .get("https://a.eco-z.org/wp-json/wp/v2/edu_service")
          .then((response) => response.data);
        ServiceList = data.map((el) => {
          return {
            id: el.id,
            text: el.title.rendered,
            price: el.edu_service_price,
            oldPrice: el.edu_service_price2,
            isOffer: !!+el.is_main_offer_edu,
          };
        });
        commit("SET_EDU_SERVISE", ServiceList);
      } catch (e) {
        console.log(e);
      }
      // return ServiceList;
    },
  },
  getters: {
    eduServiseList: (s) => s.eduServicesList,
    eduMainOffer: (s) => s.eduMainOffer,
  },
};
