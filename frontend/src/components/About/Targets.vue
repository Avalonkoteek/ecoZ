<template>
  <section class="template section">
    <Overlay v-model="isOpen" />
    <div class="container" ref="pageExit">
      <ButtonBack class="template__button-back" :to="getTemplateDate.backButton" />

      <div class="template__content">
        <div
          class="template__wrapper scrollbar"
          :class="{'template__wrapper--full': !(getTemplateDate.images && getTemplateDate.images.length) }"
        >
          <div class="template__text" v-html="getTemplateDate.textHTML"></div>
        </div>
        <div v-if="getTemplateDate.images && getTemplateDate.images.length" class="template__container-slider">
          <v-slider class="template__swiper" name="slider-template" :disabled="!(getTemplateDate.images.length !== 1)" :options="sliderOptions">
            <div class="swiper-slide" v-for="(item, index) in getTemplateDate.images" :key="index">
              <div class="template__swiper-img">
                <img :src="item.url" :alt="item.alt" />
              </div>
            </div>
          </v-slider>
        </div>
      </div>

      <Breadcrumbs v-if="getTemplateDate.links && getTemplateDate.links.length" :links="getTemplateDate.links" />
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

      const parent = this.getAllPages.find(
        item => item.id === page.parent
      );
      // обработка контента
      const content = page.content.rendered;

      // IMAGES
      const images = this.getImages(content);

      // TEXT
      let textHTML = content.split('</p>')[0].replace('<p>', '')

      if (textHTML.indexOf('src="') !== -1)
        textHTML = textHTML.split('<img')[0];

      // LINKS
      const links = this.getLinks(page.parent);
      const backButton = parent.link.replace("https://a.eco-z.org", "");

      // TEMPLATE
      let template = {
        backButton :  backButton || '',
        textHTML: textHTML || "",
        links: links || [],
        images: images || []
      };

      return template;
    },
  },
  methods: {
    getLinks(parentId) {
      let links = [];
      for (let page of this.getAllPages) {
        let link = {};
        if (page.parent === parentId) {
          link.name = page.title.rendered;
          link.to = page.link.replace("https://a.eco-z.org", "");
          links.push(link);
        }
      }
      return links;
    },
    getImages(content) {
      const srcRegx = /src="(.+?)"/g;
      const altRegx = /alt=(.+?)"/g;

      let alts, imagesUrls, images
      if (altRegx.test(content))
      alts = content.match(altRegx).map(item => {
        if (item.replace("alt=", "") === '""') return "";
        return item.replace("alt=", "");
      });

      if (srcRegx.test(content))
      imagesUrls = content
        .match(srcRegx)
        .map(item => item.replace("src=", "").replace('"', ""));

      if (srcRegx.test(content))
      images = imagesUrls.map((i, index) => {
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
