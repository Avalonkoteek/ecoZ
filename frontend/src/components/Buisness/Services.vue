<template>
  <section class="section services">

    <div class="container">
      <ButtonBack class="services__btn-back" :to="'/about'" />
      <div class="services__cols">
        <div class="services__col-narrow ">
            <div class="services__item services__item--stock">
              <div class="services__item-wrapper services__item-wrapper--text services__item-wrapper--scrollbar scrollbar">
                <p class="services__item-text services__item-text--stock">Проведение квеста «Чистые игры» для укрепления корпоративной культуры и формирования имиджа компанииПроведение квеста «Чистые игры» для укрепления корпоративной культуры и формирования имиджа компанииПроведение квеста «Чистые игры» для укрепления корпоративной культуры и формирования имиджа компанииПроведение квеста «Чистые игры» для укрепления корпоративной культуры и формирования имиджа компанииПроведение квеста «Чистые игры» для укрепления корпоративной культуры и формирования имиджа компании</p>
              </div>

              <div class="services__item-wrapper services__item-wrapper--red">
                <p class="services__item-price services__item-price--stock">от
                  <span class="services__item-number services__item-number--stock">100 000</span>
                   руб.</p>
              </div>
            </div>
        </div>

        <div class="services__col-wide">
          <ul class="services__list scrollbar">
            <li class="services__item">
              <div class="services__item-wrapper services__item-wrapper--text">
                <p class="services__item-text services__item-text--right">Проведение квеста «Чистые игры» для укрепления корпоративной культуры и формирования имиджа компании</p>
              </div>
              <div class="services__item-wrapper services__item-wrapper--number">
                <p class="services__item-price">от
                  <span class="services__item-number">100 000</span>
                  руб.</p>
                <p class="services__item-price services__item-price--old">от <span class="services__item-number services__item-number--old">100 000</span> руб.</p>
              </div>
            </li>
            <li class="services__item">
              <div class="services__item-wrapper services__item-wrapper--text">
                <p class="services__item-text services__item-text--right">Проведение квеста «Чистые игры» для укрепления корпоративной культуры и формирования имиджа компании</p>
              </div>
              <div class="services__item-wrapper services__item-wrapper--number">
                <p class="services__item-price">от
                  <span class="services__item-number">100 000</span>
                  руб.</p>
                <p class="services__item-price services__item-price--old">от <span class="services__item-number services__item-number--old">100 000</span> руб.</p>
              </div>
            </li>
            <li class="services__item">
              <div class="services__item-wrapper services__item-wrapper--text">
                <p class="services__item-text services__item-text--right">Проведение квеста «Чистые игры» для укрепления корпоративной культуры и формирования имиджа компании</p>
              </div>
              <div class="services__item-wrapper services__item-wrapper--number">
                <p class="services__item-price">от
                  <span class="services__item-number">100 000</span>
                  руб.</p>
                <p class="services__item-price services__item-price--old">от <span class="services__item-number services__item-number--old">100 000</span> руб.</p>
              </div>
            </li>
            <li class="services__item">
              <div class="services__item-wrapper services__item-wrapper--text">
                <p class="services__item-text services__item-text--right">Проведение квеста «Чистые игры» для укрепления корпоративной культуры и формирования имиджа компании</p>
              </div>
              <div class="services__item-wrapper services__item-wrapper--number">
                <p class="services__item-price">от
                  <span class="services__item-number">100 000</span>
                  руб.</p>
                <p class="services__item-price services__item-price--old">от <span class="services__item-number services__item-number--old">100 000</span> руб.</p>
              </div>
            </li>
            <li class="services__item">
              <div class="services__item-wrapper services__item-wrapper--text">
                <p class="services__item-text services__item-text--right">Проведение квеста «Чистые игры» для укрепления корпоративной культуры и формирования имиджа компании</p>
              </div>
              <div class="services__item-wrapper services__item-wrapper--number">
                <p class="services__item-price">от
                  <span class="services__item-number">100 000</span>
                  руб.</p>
                <p class="services__item-price services__item-price--old">от <span class="services__item-number services__item-number--old">100 000</span> руб.</p>
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
    };
  },
};
</script>
