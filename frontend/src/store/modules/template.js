// import axios from "axios";

export default {
  state: {},
  mutations: {
    setTemplate(state, payload) {
        console.log(payload);
    }
  },
  actions: {
    fetchTemplate({ commit }, data) {
        commit("setTemplate", data)
    },
    // async fetchLinks({}) {
    //   try {
    //     let data = await axios
    //       .get("https://eco-z.org//wp-json/", {
    //       })
    //       .then((response) => response.data)
    //       .catch((e) => console.log(e));
    //     console.log(data)
    //     commit("", data);
    //   } catch (e) {
    //     console.log(e)
    //   }
    // }
  },
  getters: {},
};
