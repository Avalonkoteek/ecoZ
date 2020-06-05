<template>
  <section class="section partners">
    <Overlay v-model="isOpen" />
    <div class="container" ref="pageExit">
      <ButtonBack class="partners__button-back" :to="'/about'" />
      <div class="partners__container-slider">
        <v-slider class="partners__swiper" name="view-shop" :options="sliderOptions">
          <div class="swiper-slide partners__slide">
            <img src="../../assets/img/partners/Image_1.jpg" alt="img_1" />
          </div>
          <div class="swiper-slide partners__slide">
            <img src="../../assets/img/partners/Image_1.jpg" alt="img_1" />
          </div>
          <div class="swiper-slide partners__slide">
            <img src="../../assets/img/partners/Image_1.jpg" alt="img_1" />
          </div>
          <div class="swiper-slide partners__slide">
            <img src="../../assets/img/partners/Image_1.jpg" alt="img_1" />
          </div>
          <div class="swiper-slide partners__slide">
            <img src="../../assets/img/partners/Image_1.jpg" alt="img_1" />
          </div>
          <div class="swiper-slide partners__slide">
            <img src="../../assets/img/partners/Image_1.jpg" alt="img_1" />
          </div>
        </v-slider>
      </div>

      <Breadcrumbs :links="links" />
    </div>
  </section>
</template>

<script>
import VSlider from "../controls/VSlider.vue";
import ButtonBack from "../controls/ButtonBack.vue";
import Breadcrumbs from "../controls/Breadcrumbs.vue";
import Overlay from "../Background/Overlay";

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
    639: {
      slidesPerView: 3
    }
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
      isOpen: false
    };
  },

  computed: {
    sliderOptions() {
      return sliderOptions;
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
    setTimeout(next, 750);
  }
};
</script>
