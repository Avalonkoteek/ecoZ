<template>
  <section class="template section">
    <Overlay v-model="isOpen" />
    <div class="container" ref="pageExit">
      <ButtonBack class="template__button-back" :to="'/about'" />

      <div class="template__content">
        <div
          class="template__wrapper scrollbar"
          :class="{'template__wrapper--full': !getTemplateDate.images }"
        >
          <div class="template__text" v-html="getTemplateDate.textHTML"></div>
        </div>
        <div v-if="getTemplateDate.images" class="template__container-slider">
          <v-slider class="template__swiper" name="view-shop" :options="sliderOptions">
            <div class="swiper-slide" v-for="(item, index) in getTemplateDate.images" :key="index">
              <div class="template__swiper-img">
                <img :src="item.url" :alt="item.alt" />
              </div>
            </div>
          </v-slider>
        </div>
      </div>

      <Breadcrumbs v-if="getTemplateDate.links" :links="getTemplateDate.links" />
    </div>
  </section>
</template>

<script>
import VSlider from "../controls/VSlider.vue";
import ButtonBack from "../controls/ButtonBack.vue";
import Breadcrumbs from "../controls/Breadcrumbs.vue";
import Overlay from "../Background/Overlay";

import { mapGetters } from "vuex";

const sliderOptions = {
  spaceBetween: 24,
  slidesPerView: 1,
  grabCursor: true,
  autoHeight: true,
  simulateTouch: false,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true
  }
};

export default {
  components: {
    VSlider,
    ButtonBack,
    Breadcrumbs,
    Overlay
  },

  data() {
    return {
      links: [
        {
          name: "Цели",
          to: "/about/targets"
        },
        {
          name: "Деятельность",
          to: "/about"
        },
        {
          name: "Партнеры",
          to: "/about/partners"
        }
      ],
      isOpen: false,
      template: {}
    };
  },

  computed: {
    ...mapGetters(["getAllPages"]),
    sliderOptions() {
      return sliderOptions;
    },

    // ===============
    // ШАБЛОН
    // ===============

    getTemplateDate() {
      const path = this.$route.path;
      const page = this.getAllPages.find(
        page => page.link.indexOf(path) !== -1
      );
      if (!page) return "";

      // обработка контента
      const content = page.content.rendered;

      // IMAGES
      const images = this.getImages(content);

      // TEXT
      let textHTML =
        content
          .split("<br />")
          .filter(i => !i.match("<img"))
          .join("<br />") + "</p>";

      // LINKS
      const links = this.getLinks(page.parent);

      // TEMPLATE
      let template = {
        textHTML: textHTML,
        links: links,
        images: images
      };

      console.log(template);

      return (
        template || {
          textHTML: "",
          links: [],
          images: []
        }
      );
    }
  },
  methods: {
    getLinks(parentId) {
      let links = [];
      for (let page of this.getAllPages) {
        let link = {};
        if (page.parent === parentId) {
          link.name = page.title.rendered;
          link.to = page.link.replace("https://eco-z.org", "");
          links.push(link);
        }
      }
      return links;
    },
    getImages(content) {
      const srcRegx = /src="(.+?)"/g;
      const altRegx = /alt=(.+?)"/g;

      const alts = content.match(altRegx).map(item => {
        if (item.replace("alt=", "") === '""') return "";
        return item.replace("alt=", "");
      });
      const imagesUrls = content
        .match(srcRegx)
        .map(item => item.replace("src=", "").replace('"', ""));

      const images = imagesUrls.map((i, index) => {
        return { url: i.slice(0, -1), alt: alts[index] };
      });
      return images;
    }
  },

  mounted() {
    let { pageExit } = this.$refs;
    pageExit.classList.add("container--contact");
    this.isOpen = true;
  },

  beforeRouteLeave(to, from, next) {
    let { pageExit } = this.$refs;
    pageExit.classList.remove("container--contact");
    pageExit.classList.add("container--contact-exit");
    this.isOpen = false;
    setTimeout(next, 400);
  }
};
</script>
