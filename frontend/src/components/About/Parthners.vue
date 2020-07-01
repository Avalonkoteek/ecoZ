<template>
  <section class="section partners">
    <Overlay v-model="isOpen" />
    <div class="container container--contact" ref="pageExit">
      <ButtonBack class="partners__button-back" :to="'/about'" />
      <div class="partners__container-slider">
        <v-slider ref="swiper" class="partners__swiper" name="view-shop" :options="sliderOptions">
          <div
            class="swiper-slide partners__slide"
            v-for="(item, index) in getPartners"
            :key="index"
            @click.prevent="setInfo(index)"
          >
            <div class="partners__slide-wrapper">
              <div class="partners__slide-content">
                <img
                  class="partners__slide-background"
                  :class="{'is-active': (slideOpen === index)}"
                  :src="item.img.src"
                  :alt="item.img.alt"
                />
                <p class="partners__slide-title">{{item.title}}</p>
                <div
                  class="partners__slide-info"
                  :class="{'is-active': (slideOpen === index)}"
                  v-if="slideOpen === index"
                >
                  <div class="partners__slide-info-scrollbar scrollbar">
                    <span class="partners__slide-info-close" @click.stop="closeInfo" />
                    <img class="partners__slide-info-img" :src="item.logo.src" :alt="item.logo.alt" />
                    <p class="partners__slide-info-text">{{item.text}}</p>
                    <a class="partners__slide-info-link link" :href="item.link">
                      <v-svg name="link" width="11" height="11" />
                      <span class="link__buttom-line">{{item.link}}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </v-slider>
      </div>

      <Breadcrumbs v-if="getAboutLinks.length>1 " :links="getAboutLinks" />
    </div>
  </section>
</template>

<script>
import VSlider from "../controls/VSlider.vue";
import VSvg from "../controls/VSvg.vue";
import { mapActions, mapGetters } from "vuex";
import ButtonBack from "../controls/ButtonBack.vue";
import Breadcrumbs from "../controls/Breadcrumbs.vue";
import Overlay from "../Background/Overlay";

// const img = "/img/Image_1.4bb88f8d.jpg";
// const sergio = "/img/Sergio_Pizza.c6f78a0e.png";

const sliderOptions = {
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 24,
  grabCursor: true,
  simulateTouch: false,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },

  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true
  },

  breakpoints: {
    767: {
      slidesPerView: 3
    }
  }
};

export default {
  components: {
    VSlider,
    VSvg,

    ButtonBack,
    Breadcrumbs,
    Overlay
  },

  data() {
    return {
      slideOpen: null,
      isOpen: false
    };
  },

  computed: {
    ...mapGetters(["getPartners", "getAboutLinks"]),
    sliderOptions() {
      return sliderOptions;
    }
  },

  created() {
    this.fetchParters();
  },

  methods: {
    ...mapActions(["fetchParters"]),
    setInfo(index) {
      if (this.slideOpen === null) this.slideOpen = index;
    },

    closeInfo() {
      this.slideOpen = null;
    }
  },

  mounted() {
    this.isOpen = true;
    this.$refs.swiper.slider.on("slideChange", () => {
      this.slideOpen = null;
    });
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
