<template>
  <section class="section services">
    <Overlay v-model="isOpen" />
    <div class="container container--contact" ref="pageExit">
      <ButtonBack class="services__btn-back" :to="'/business'" />
      <div class="services__cols">
        <div v-if="mainOffer" class="services__col-narrow">
          <div class="services__item services__item--stock">
            <div
              class="services__item-wrapper services__item-wrapper--text services__item-wrapper--scrollbar scrollbar"
            >
              <p class="services__item-text services__item-text--stock">{{ mainOffer.text }}</p>
            </div>

            <div class="services__item-wrapper services__item-wrapper--red">
              <p class="services__item-price services__item-price--stock">
                от
                <span
                  class="services__item-number services__item-number--stock"
                >{{ mainOffer.price }}</span>
                руб.
              </p>
            </div>
          </div>
        </div>

        <div class="services__col-wide" :class="{'services__col-wide--full': !mainOffer}">
          <ul class="services__list scrollbar" :class="{ 'services__list--scroll': scroll }">
            <li class="services__item" v-for="item in serviseList" :key="item.id">
              <div
                class="services__item-wrapper services__item-wrapper--narrow services__item-wrapper--text"
              >
                <p class="services__item-text services__item-text--right">{{ item.text }}</p>
              </div>
              <div class="services__item-wrapper services__item-wrapper--number">
                <p
                  v-if="item.oldPrice.length !== '0'"
                  class="services__item-price services__item-price--old"
                >
                  от
                  <span
                    class="services__item-number services__item-number--old"
                  >{{ item.oldPrice }}</span>
                  руб.
                </p>
                <p class="services__item-price">
                  от
                  <span class="services__item-number">{{ item.price }}</span>
                  руб.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <Breadcrumbs v-if="getBusinessLinks" :links="getBusinessLinks" />
    </div>
  </section>
</template>
<script>
import ButtonBack from "../controls/ButtonBack.vue";
import Breadcrumbs from "../controls/Breadcrumbs.vue";
import Overlay from "../Background/Overlay";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    ButtonBack,
    Breadcrumbs,
    Overlay
  },
  data() {
    return {
      isOpen: false,
      scroll: false
    };
  },
  computed: {
    ...mapGetters(["serviseList", "mainOffer", "getBusinessLinks"])
  },

  methods: {
    ...mapActions(["fetchServices"])
  },

  created() {
    console.log(this.mainOffer)
    this.fetchServices();
  },
  mounted() {
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
