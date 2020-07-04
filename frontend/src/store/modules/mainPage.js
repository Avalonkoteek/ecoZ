import axios from "axios";
export default {
  state: {
    main: {
      title: "",
      description: "",
      links: [],
    },
    business: {
      title: "",
      description: "",
      links: [],
    },
    about: {
      title: "",
      description: "",
      links: [],
    },
    volunteers: {
      title: "",
      description: "",
      links: [],
    },
    education: {
      title: "",
      description: "",
      links: [],
    },
    contacts: {
      title: "",
      description: "",
      links: [],
    },

    allPages: [],
  },
  mutations: {
    SET_PAGES: (state, data) => {
      const pages = {
        main: "main",
        business: "business",
        about: "about",
        volunteers: "volunteers",
        education: "education",
        contacts: "contacts",
      };

      // const specialPages = {
      //   privacyPolicy: "privacy-policy",
      // }

      for (let page of data) {
        if (!page.parent) {
          // Интерапт для страниц которых быть не должно
          if (pages[page.slug]) {
            state[page.slug].title = page.title.rendered;
            state[page.slug].description = page.content.rendered;

            continue;
          } else
          // {
            // if (specialPages[page.slug]) {
            //   state[page.slug].description = page.content.rendered;
            // }
            continue;
          // }
        }

        const id = page.parent;
        const homePage = data.find((page) => page.id === id);
        const link = {};
        link.name = page.title.rendered;
        link.to = page.link.replace("https://a.eco-z.org", "");

        state[homePage.slug].links.push(link);
      }

      state.allPages = data;
    },
  },
  actions: {
    async fetchPages({ commit }) {
      try {
        let data = await axios
          .get("https://a.eco-z.org/wp-json/wp/v2/pages/", {
            params: {
              per_page: 100,
            },
          })
          .then((response) => response.data)
          .catch((e) => console.log(e));
        commit("SET_PAGES", data);
      } catch (e) {
        console.log(e);
      }
    },
    // async fetchTemplate({}) {
    //   try {
    //     let data = await axios
    //       .get("https://eco-z.org//wp-json/", {
    //         params: {
    //           per_page: 100
    //         }
    //       })
    //       .then((response) => response.data)
    //       .catch((e) => console.log(e));
    //       console.log(data)
    //     // commit("SET_PAGES", data);
    //   } catch (e) {
    //     console.log(e);
    //   }
    // },
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
  getters: {
    getMain: (state) => state.main,
    getBusiness: (state) => state.business,
    getAbout: (state) => state.about,
    getVolunteers: (state) => state.volunteers,
    getEducation: (state) => state.education,
    getContacts: (state) => state.contacts,
    getAllPages: (state) => state.allPages,

    getBusinessLinks: (state) => state.business.links,
    getAboutLinks: (state) => state.about.links,
    getVolunteersLinks: (state) => state.volunteers.links,
    getEducationLinks: (state) => state.education.links,
    getContactsLinks: (state) => state.contacts.links,
  },
  modules: {},
};
