<template>
    <section class="section">
        <div class="container">
            <v-slider
                class="popup-view-shop__slider"
                name="view-shop"
                :options="sliderOptions"
                >

                        <div class="swiper-slide">1</div>
                        <div class="swiper-slide">1</div>
                        <div class="swiper-slide">1</div>
                        <div class="swiper-slide">1</div>
                        <div class="swiper-slide">1</div>
                        <div class="swiper-slide">1</div>

            </v-slider>
        </div>

    </section>
</template>

<script>

import VSlider from '../controls/VSlider.vue'


const sliderOptions = {
    slidesPerView: 1,
    grabCursor: true,
    autoHeight: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
};

export default {
    components: {
        VSlider
    },

    mounted() {
    },

    computed: {
      sliderOptions() {
            return sliderOptions;
        },
    },
}
</script>
