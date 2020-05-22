<template>
    <section class="section">
        <div class="container">
            <div class="partners__container-slider">
                <v-slider
                    class="partners__swiper"
                    name="view-shop"
                    :options="sliderOptions"
                    >
                        <div class="swiper-slide partners__slide"><img src="../../assets/img/partners/Image_1.jpg" alt="img_1"></div>
                        <div class="swiper-slide partners__slide"><img src="../../assets/img/partners/Image_1.jpg" alt="img_1"></div>
                        <div class="swiper-slide partners__slide"><img src="../../assets/img/partners/Image_1.jpg" alt="img_1"></div>
                        <div class="swiper-slide partners__slide"><img src="../../assets/img/partners/Image_1.jpg" alt="img_1"></div>
                        <div class="swiper-slide partners__slide"><img src="../../assets/img/partners/Image_1.jpg" alt="img_1"></div>
                        <div class="swiper-slide partners__slide"><img src="../../assets/img/partners/Image_1.jpg" alt="img_1"></div>

                </v-slider>
            </div>
        </div>

    </section>
</template>

<script>

import VSlider from '../controls/VSlider.vue'


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
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
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
