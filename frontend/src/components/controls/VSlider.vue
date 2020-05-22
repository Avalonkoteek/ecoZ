<template>
    <div class="v-slider" v-swiper:slider="options">
        <div class="swiper-wrapper">
            <slot />
        </div>

        <div class="v-slider__controls">
            <button class="swiper-button-prev">
                <v-svg name="arrow_next" width="40" height="40" />
            </button>
            <div class="swiper-pagination" />
            <button class="swiper-button-next">
                <v-svg name="arrow_next" width="40" height="40" />
            </button>
        </div>
    </div>
</template>

<script>
import VSvg from './VSvg.vue';
//Swiper, SwiperSlide,
import {  directive } from 'vue-awesome-swiper'

export default {
    name: 'v-slider',
    components: {
        VSvg,
        // Swiper,
        // SwiperSlide
    },
    directives: {
        swiper: directive
    },

    serverCacheKey: props => props.name,

    props: {
        name: {
            type: String,
            required: true,
        },

        options: {
            type: Object,
            default() {
                return {
                    init: false,
                    grabCursor: true,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                };
            },
        },

        shouldInitialize: {
            type: Boolean,
            default: true,
        },
    },

    watch: {
        shouldInitialize(value) {
            if (value && !this.initialized) this.slider.init();
        },
    },

    methods: {
        onEndReached() {
            this.$emit('reachEnd');
        },
    },

    mounted() {
        if (this.slider) {
            this.slider.on('reachEnd', this.onEndReached);
            if (this.shouldInitialize) this.slider.init();
        }
    },

    beforeDestroy() {
        if (this.slider) {
            this.slider.destroy(true, false);
            this.slider = null;
        }
    },
};
</script>
