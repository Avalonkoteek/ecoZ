import axios from "axios";
export default {
  state: {
    partners: [],
  },
  mutations: {
    // ===========================
    // SET_PARTNERS===============
    // ===========================
    SET_PARTNERS: (state, payload) => {
      if (state.partners.length === 0) {
        const PartnersList = payload.map((partner) => {
          // формирование массива партнеров

          let description =
            partner.content.rendered.replace("</p>", "").replace("<p>", "") ||
            "";
          let title = partner.title.rendered;
          // Обработка текста и заголовка из стандартных полей

          return {
            id: partner.id,
            text: partner.description || description,
            logo: { src: partner.b2b_partner_logo.guid || "", alt: "" },
            img: {
              src: partner["background-image"].guid || "",
              alt: "",
            },
            title: partner.name_organization || title || "",
            link: partner.organization_link || "",
          };
        });

        state.partners = [...PartnersList];
        // SET_PARTNERS
      }
    },
  },
  actions: {
    // ===========================
    // FETCH =====================
    // ===========================

    async fetchParters({ commit }) {
      try {
        let data = await axios
          .get("https://eco-z.org/wp-json/wp/v2/b2b_partner")
          .then((response) => response.data);
        commit("SET_PARTNERS", data);
      } catch (e) {
        console.log(e);
      }
    },
  },
  modules: {},
  getters: {
    getPartners: (s) => s.partners,
  },
};
