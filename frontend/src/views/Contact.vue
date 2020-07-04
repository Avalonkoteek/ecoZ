<template>
  <section class="main">
    <Overlay />
    <div class="container">
      <div class="main__section">
        <h2 class="main__title" v-if="getContacts.title">{{ getContacts.title }}</h2>
        <div
          class="main__description"
          v-if="pageContent.description"
          v-html="pageContent.description"
        ></div>
        <ul class="contact__wrapper" v-if="pageContent.linksData.length">
          <li class="contact__item" v-for="(link, index) in pageContent.linksData" :key="index">
            <a v-if="link.mail" :href="'mailto: '+link.content.link" class="contact__links link">
              <img class="contact__social-img" :alt="link.content.text" :src="link.img.src" />
              {{link.content.text}}
            </a>
            <a v-else-if="link.tel" :href="'tel: +'+link.tel" class="contact__links link">
              <img class="contact__social-img" :alt="link.content.text" :src="link.img.src" />
              {{link.content.text}}
            </a>
            <a v-else :href="link.content.link" target="__blank" class="contact__links link">
              <img class="contact__social-img" :alt="link.content.text" :src="link.img.src" />
              {{link.content.text}}
            </a>
          </li>
        </ul>
        <Breadcrumbs v-if="getContacts.links.length" :links="getContacts.links" />
      </div>
    </div>
  </section>
</template>

<script>
import Breadcrumbs from "../components/controls/Breadcrumbs";
import Overlay from "../components/Background/Overlay";

import { mapGetters } from "vuex";

export default {
  name: "contact",

  components: {
    Breadcrumbs,
    Overlay
  },

  data: () => ({
    content: {
      title: "Свяжитесь с нами удобным для вас способом",
      description: "",
      breadcrumbs: [{ name: "Контактная форма", to: "contact/contact_form" }]
    }
  }),

  computed: {
    ...mapGetters(["getContacts"]),
    pageContent() {
      const ServerData = this.getContacts.description.split("\n");
      const description = this.getTitle(ServerData);
      const socialsData = this.getSocialData(ServerData);

      const self = this;
      let linksData = [];
      linksData = socialsData.map(item => {
        let link = {};
        link.tel = self.getNumber(item);
        link.mail = self.getMail(item);
        link.img = self.getImage(item);
        let socialLink = item[0];
        if (!(link.tel || link.mail) && socialLink) {
          if (!socialLink.match(/https?/)) socialLink = "https://" + socialLink;
        }
        link.content = { text: item[1], link: socialLink };
        return link;
      });
      return { linksData, description };
    }
  },
  methods: {
    getSocialData(content) {
      let data = [];
      let subdata = [];
      content.forEach((item, i, arr) => {
        if (item === "<p>&nbsp;</p>" || i === arr.length - 1) {
          data.push(subdata);
          subdata = [];
        } else if (
          !(item.match("<p>") || item.match("</p>") || item.match("<br />"))
        ) {
          subdata.push(item);
        }
      });
      return data;
    },
    getTitle(arr) {
      return arr
        .filter(item => {
          if (item.match("<p>&nbsp;</p>")) return false;
          if (item.match("<p>") || item.match("</p>") || item.match("<br />"))
            return true;
        })
        .join("");
    },
    getNumber(contentArr) {
      const numberRegx = /(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){6,14}(\s*)?/g;
      const tel = contentArr.filter(item => item.match(numberRegx))[0];
      if (!tel) return null;
      return tel.match(/[0-9]+/g).join("");
    },
    getMail(contentArr) {
      const mailRegx = /([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}/g;
      const mail = contentArr.filter(item => item.match(mailRegx))[0];
      if (!mail) return null;
      return mail;
    },
    getImage(contentArr) {
      const srcRegx = /https?:\/\/\S+(?:jpg|jpeg|png|svg)/g;
      const altRegx = /alt=(.+?)"/g;
      const src = contentArr.filter(item => item.match(srcRegx))[0];
      let alt = contentArr.filter(item => item.match(altRegx))[0];
      if (!alt) alt = "";

      if (!src) return "";
      return { src, alt: alt || "" };
    }
  }
};
</script>
