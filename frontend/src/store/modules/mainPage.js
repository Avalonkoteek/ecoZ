import axios from "axios";
export default {
  state: {
    allPages: [],
    volunteers: {},
  },
  mutations: {
    SET_PAGES: (state, data) => {
      const pageSlugArray = ["business", "volunteers", "education", "about"];
      // console.log(data.map((i) => i.slug));
      for (let pageSlug of pageSlugArray) {
        const page = data.filter(
          (el) => el.slug.toLowerCase() === pageSlug.toLowerCase()
        );

        if (page.length === 0) continue;
        const newPage = {
          title: page[0].title.rendered,
          description: page[0].excerpt.rendered,
          links: page[0]._links,
        };
        console.log(newPage);
        state.allPages = [...state.allPages, newPage];
      }
    },
  },
  actions: {
    async fetchPages({ commit }) {
      try {
        let data = await axios
          .get("https://eco-z.org//wp-json/wp/v2/pages")
          .then((response) => response.data)
          .catch((e) => console.log(e));
        commit("SET_PAGES", data);
      } catch (e) {
        console.log(e);
      }
    },
  },
  modules: {},
};
