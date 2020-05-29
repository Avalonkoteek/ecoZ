<template>
  <section class="section">
    <Overlay v-model="isOpen" />
    <div class="container">
      <ButtonBack :to="'/about'" />
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
import Overlay from "../Background/Overlay";
import ButtonBack from "../controls/ButtonBack.vue";
import Breadcrumbs from "../controls/Breadcrumbs.vue";

const sliderOptions = {
  // loop: true,
  centeredSlides: true,
  spaceBetween: 24,
  // slidesOffsetBefore: 24,
  // slidesOffsetAfter: 24,
  slidesPerView: 3,
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
      isOpen: false
    };
  },
  mounted() {
    this.isOpen = true;
  },

  computed: {
    sliderOptions() {
      return sliderOptions;
    }
  },
  beforeRouteLeave(to, from, next) {
    this.isOpen = false;
    setTimeout(next, 750);
  }
};
</script>
