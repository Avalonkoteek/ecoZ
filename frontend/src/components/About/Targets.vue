<template>
    <section class="targets section">
        <div class="container">
            <ButtonBack class="targets__button-back" :to="'/about'" />

            <div class="targets__content">
                <div class="targets__text">
                    Мы создали нашу некоммерческую организацию чтобы достичь следующих целей:
                    - общество должно знать всё о способах сортировки отходов, адресах мест их переработки;
                    - экологичные пространства (офисные, производственные, лично-бытовые) должны применяться повсеместно;
                    - принцип «Жить экологично» должен стать неотъемлемой частью развитого общества.
                    Для решения наших задач мы проводим эко-занятия в образовательных учреждениях, акции и эко-квесты, готовим предложения по сокращению потребления ресурсов, внедряем эко-привычки в кафе и офисах.
                </div>
                <div class="targets__container-slider">
                    <v-slider
                        class="targets__swiper"
                        name="view-shop"
                        :options="sliderOptions"
                        >
                            <div class="swiper-slide"><img src="../../assets/img/partners/Image_1.jpg" alt="img_1"></div>
                            <div class="swiper-slide"><img src="../../assets/img/partners/Image_1.jpg" alt="img_1"></div>
                            <div class="swiper-slide"><img src="../../assets/img/partners/Image_1.jpg" alt="img_1"></div>
                            <div class="swiper-slide"><img src="../../assets/img/partners/Image_1.jpg" alt="img_1"></div>
                            <div class="swiper-slide"><img src="../../assets/img/partners/Image_1.jpg" alt="img_1"></div>
                            <div class="swiper-slide"><img src="../../assets/img/partners/Image_1.jpg" alt="img_1"></div>

                    </v-slider>
                </div>
            </div>

            <Breadcrumbs :links="links"/>
        </div>

    </section>
</template>

<script>

import VSlider from '../controls/VSlider.vue'
import ButtonBack from "../controls/ButtonBack.vue"
import Breadcrumbs from "../controls/Breadcrumbs.vue"

const sliderOptions = {
    // loop: true,
    spaceBetween: 24,
    // slidesOffsetBefore: 24,
    // slidesOffsetAfter: 24,
    slidesPerView: 1,
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
        clickable: true,
    },
};

export default {
    components: {
        VSlider,
        ButtonBack,
        Breadcrumbs,
    },

    data() {
        return {
            links: [
                {
                    name: "Цели",
                    to: '/about/targets',
                },
                {
                    name: "Деятельность",
                    to: '/about',
                },
                {
                    name: "Партнеры",
                    to: '/about/partners',
                },
            ]
        }
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