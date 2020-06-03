<template>
  <section class="section services">
    <div class="container">
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

      <Breadcrumbs :links="links" />
    </div>
  </section>
</template>
<script>
import ButtonBack from "../controls/ButtonBack.vue";
import Breadcrumbs from "../controls/Breadcrumbs.vue";

export default {
  components: {
    ButtonBack,
    Breadcrumbs
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
  }
};
</script>
