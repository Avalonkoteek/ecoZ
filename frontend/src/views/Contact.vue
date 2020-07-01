<template>
  <section class="main">
    <Overlay />
    <div class="container">
      <div class="main__section">
        <h2 class="main__title">{{ content.title }}</h2>
        <ul class="contact__wrapper">
          <li class="contact__item" v-for="(link, index) in links" :key="index">
            <a
              :href="link.link"
              target="__blank"
              class="contact__links link"
            >
            <img
              class="contact__social-img"
              :alt="link.altImg"
              :src="link.srcImg"
            />{{link.titleLink}}</a>
          </li>
        </ul>
        <!-- <ul class="contact__wrapper">
          <li class="contact__item">

            <a
              href="https://www.instagram.com/ecozelenograd/"
              target="__blank"
              class="contact__links link"
            >
            <img
              class="contact__social-img"
              alt="instagram"
              src="../assets/img/Contact/Insta_Icon.svg"
            />@ecozelenograd</a>
          </li>
          <li class="contact__item">

            <a
              href="https://www.instagram.com/ecozelenograd/"
              target="__blank"
              class="contact__links link"
            >
            <img
              class="contact__social-img"
              alt="instagram"
              src="../assets/img/Contact/Vk_Icon.svg"
            />vk.com/ecozrecycle</a>
          </li>
          <li class="contact__item">
            <a
              href="https://www.instagram.com/ecozelenograd/"
              target="__blank"
              class="contact__links link"
            >
            <img
              class="contact__social-img"
              alt="instagram"
              src="../assets/img/Contact/Mail_Icon.svg"
            />
            info.ecoz.org@gmail.com</a>
          </li>
          <li class="contact__item">
            <a
              href="https://www.instagram.com/ecozelenograd/"
              target="__blank"
              class="contact__links link"
            >
            <img
              class="contact__social-img"
              alt="instagram"
              src="../assets/img/Contact/Phone_Icon.svg"
            />
            +7 (111) 111-11-11</a>
          </li>
        </ul> -->
        <Breadcrumbs :links="content.breadcrumbs" />
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
      // img: "../assets/img/Contact/Insta_Icon.svg",
      title: "Свяжитесь с нами удобным для вас способом",
      description: "",
      breadcrumbs: [{ name: "Контактная форма", to: "contact/contact_form" }]
    }
  }),

  computed: {
    ...mapGetters(['getContacts']),
    links() {
      const links = []
      const titleRegx = />[!"':;-_=+|(),./@,A-zА-я0-9]*</g;
      const linkRegx = /href="(.+?)"/g
      const srcRegx = /src="(.+?)"/g
      const altRegx = /alt="(.+?)"/g

      console.log(this.getContacts.description.split('\n'));
      const socials = this.getContacts.description.split('</p>');

      for (let social of socials) {
        let titleLink, link, srcImg, altImg;
        Array.from(social.matchAll(titleRegx)).map((item) => {
          const arrTitle = item[0].slice(1, -1);
          if (arrTitle.length)
            titleLink = arrTitle
        });

        if (!titleLink)
          titleLink = '';

        link = social.match(linkRegx);
        !(link === null) ? link = link.join().replace('href="', '').slice(0, -1) : link = '';

        srcImg = social.match(srcRegx);
        !(srcImg === null) ? srcImg = srcImg.join().replace('src="', '').slice(0, -1) : srcImg = '';

        altImg = social.match(altRegx);
        !(altImg === null) ? altImg = altImg.join().replace('alt="', '').slice(0, -1) : altImg = '';


        links.push({titleLink, link, srcImg, altImg})
      }
      return links
    }
  },

  mounted() {
    // console.log(this.getContacts);
    // console.log(links)
    //  for (let pageSlug of pageSlugArray) {
    //     const page = data.filter(
    //       (el) => el.slug.toLowerCase() === pageSlug.toLowerCase()
    //       );

    //       if (page.length === 0) continue;
    //       const newPage = {
    //         title: page[0].title.rendered,
    //         description: page[0].excerpt.rendered,
    //         links: page[0]._links,
    //       };
    //       state.allPages = [...state.allPages, newPage];
    //     }
  }
};
</script>

<style></style>
