import axios from "axios";
export default {
  state: {
    allPages: [],
    volunteers: {},
  },
  mutations: {
    setPageState: (state, Arrpages) => {
      Arrpages.forEach((page) => {
        state[page.slug] = page;
      });
    },
  },
  actions: {
    async fetchPages() {
      let data = await axios
        .get("https://eco-z.org//wp-json/wp/v2/pages")
        .then((response) => response.data);

      const business = data.filter((el) => el.slug === "business");
      let content = business[0].content.rendered;
      const len = content.length;
      const regH2 = /(<h2\b[^>]*>(.*?)<\/h2>)/;
      const regP = /(<p>(.*?)<\/p>)/;
      let pos = 0;
      while (pos < len - 1) {
        pos = content.indexOf(regP.exec(content)[0]);
        console.log(pos);

        console.log(content.slice(pos));
        content = content.slice(pos);
      }
      console.log(regH2.exec(content));
      console.log(regP.exec(content));
    },
  },
  modules: {},
};
