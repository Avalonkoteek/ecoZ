<template>
  <section class="section services">
    <Overlay v-model="isOpen" />
    <div class="container" ref="pageExit">
      <ButtonBack class="services__btn-back" :to="'/about'" />
      <div class="services__cols">
        <div class="services__col-narrow">
          <div class="services__item services__item--stock">
            <div
              class="services__item-wrapper services__item-wrapper--text services__item-wrapper--scrollbar scrollbar"
            >
              <p
                class="services__item-text services__item-text--stock"
              >Проведение квеста «Чистые игры» для укрепления корпоративной культуры и формирования имиджа компанииПроведение квеста «Чистые игры» для укрепления корпоративной культуры и формирования имиджа компанииПроведение квеста «Чистые игры» для укрепления корпоративной культуры и формирования имиджа компанииПроведение квеста «Чистые игры» для укрепления корпоративной культуры и формирования имиджа компанииПроведение квеста «Чистые игры» для укрепления корпоративной культуры и формирования имиджа компании</p>
            </div>

            <div class="services__item-wrapper services__item-wrapper--red">
              <p class="services__item-price services__item-price--stock">
                от
                <span class="services__item-number services__item-number--stock">100 000</span>
                руб.
              </p>
            </div>
          </div>
        </div>

        <div class="services__col-wide">
          <ul class="services__list scrollbar" :class="{'services__list--scroll': scroll}">
            <li class="services__item" v-for="item in items" :key="item.id">
              <div class="services__item-wrapper services__item-wrapper--text">
                <p class="services__item-text services__item-text--right">{{item.text}}</p>
              </div>
              <div class="services__item-wrapper services__item-wrapper--number">
                <p v-if="item.oldPrice" class="services__item-price services__item-price--old">
                  от
                  <span class="services__item-number services__item-number--old">{{item.oldPrice}}</span> руб.
                </p>
                <p class="services__item-price">
                  от
                  <span class="services__item-number">{{item.price}}</span>
                  руб.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <Breadcrumbs v-if="links.length && links.length !== 1" :links="links" />
    </div>
  </section>
</template>
<script>
import ButtonBack from "../controls/ButtonBack.vue";
import Breadcrumbs from "../controls/Breadcrumbs.vue";
import Overlay from "../Background/Overlay";

export default {
  components: {
    ButtonBack,
    Breadcrumbs,
    Overlay
  },
  data() {
    return {
      isOpen: false,
      links: [
        {
          name: "Услуги",
          to: "/business/services"
        }
      ],
      scroll: false,

      items: [
        {
          id: 1,
          text:
            "Проведение квеста «Чистые игры» для укрепления корпоративной культуры и формирования имиджа компании",
          price: "1223",
          oldPrice: "12512"
        },
        {
          id: 2,
          text:
            "Проведение квеста «Чистые игры» для укрепления корпоративной культуры и формирования имиджа компании",
          price: "1223"
        },
        {
          id: 3,
          text:
            "Проведение квеста «Чистые игры» для укрепления корпоративной культуры и формирования имиджа компании",
          price: "1223"
        }
      ]
    };
  },

  mounted() {
    if (this.items.length > 2) this.scroll = true;
    let { pageExit } = this.$refs;
    pageExit.classList.add("container--contact");
    this.isOpen = true;
    console.log(this.links.length)
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
