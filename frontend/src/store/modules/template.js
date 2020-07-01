// import axios from "axios";

export default {
  state: {
    aboutChildrenTemplate: [],
    businessChildrenTemplate: [],
    educationChildrenTemplate: [],
    volunteersChildrenTemplate: [],
  },
  mutations: {
    setTemplate(payload) {
      // const about = payload.filter((item) => {
      //   item.link.match("https://eco-z.org/education/");
      // });
      console.log(payload);
    },
  },
  actions: {
    fetchTemplate({ commit }, data) {
      commit("setTemplate", data);
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
    // async fetchLinks({}) {
    //   try {
    //     let data = await axios
    //       .get("https://eco-z.org//wp-json/v2/pages", {
    //         params: {
    //           per_page: 100,
    //         },
    //       })
    //       .then((response) => response.data)
    //       .catch((e) => console.log(e));
    //     console.log(data);
    //     commit("setTemplate", data);
    //   } catch (e) {
    //     console.log(e);
    //   }
    // },
  },
  getters: {},
};
