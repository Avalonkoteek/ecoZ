<template>
  <section class="section services">
    <Overlay v-model="isOpen" />
    <div class="container container--contact" ref="pageExit">
      <ButtonBack class="services__btn-back" :to="buttonBack" />
      <div class="services__cols">
        <div v-if="eduMainOffer" class="services__col-narrow" :class="{'services__col-narrow--full': !(eduServiseList && eduServiseList.length)}">
          <div class="services__item services__item--stock">
            <div
              class="services__item-wrapper services__item-wrapper--text services__item-wrapper--scrollbar scrollbar"
            >
              <p class="services__item-text services__item-text--stock">{{ eduMainOffer.text }}</p>
            </div>

            <div class="services__item-wrapper services__item-wrapper--red">
              <p class="services__item-price services__item-price--stock">
                от
                <span
                  v-if="eduMainOffer.price && eduMainOffer.price.length"
                  class="services__item-number services__item-number--stock"
                >{{ eduMainOffer.price.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') }}</span>
                руб.
              </p>
            </div>
          </div>
        </div>

        <div class="services__col-wide" v-if="eduServiseList && eduServiseList.length" :class="{'services__col-wide--full': !eduMainOffer}">
          <ul class="services__list scrollbar" :class="{ 'services__list--scroll': scroll }">
            <li class="services__item" v-for="item in eduServiseList" :key="item.id">
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
                    v-if="item.oldPrice && item.oldPrice.length"
                    class="services__item-number services__item-number--old"
                  >{{ item.oldPrice.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') }}</span>
                  руб.
                </p>
                <p class="services__item-price">
                  от
                  <span
                    v-if="item.price && item.price.length"
                    class="services__item-number">{{ item.price.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') }}</span>
                  руб.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <Breadcrumbs v-if="getEducationLinks.length" :links="getEducationLinks" />
    </div>
  </section>
</template>
<script>
import ButtonBack from "../controls/ButtonBack.vue";
import Breadcrumbs from "../controls/Breadcrumbs.vue";
import Overlay from "../Background/Overlay";
import { mapGetters } from "vuex";

export default {
  components: {
    ButtonBack,
    Breadcrumbs,
    Overlay
  },
  data() {
    return {
      isOpen: false,
      scroll: false,
    };
  },
  computed: {
    ...mapGetters(["eduServiseList", "eduMainOffer", "getEducationLinks", "getAllPages"]),
    buttonBack() {
      const path = this.$route.path;
      const page = this.getAllPages.find(
        page => page.link.indexOf(path) !== -1
      );
      if (!page) return "";

      const parent = this.getAllPages.find(
        item => item.id === page.parent
      );

      return parent.link.replace("https://a.eco-z.org", "");
    },
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
