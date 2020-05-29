<template>
  <section class="section section__services">
    <Overlay v-model="isOpen" />
    <div class="container container__services">
      <ButtonBack :to="'/about'" />
      <div class="services__wrapper">
        <div class="services__vip-item">
          <p>Проведение квеста «Чистые игры» для укрепления корпоративной культуры и формирования имиджа компании</p>
          <div class="price">
            <p class="price__old"></p>
            <p class="price__new">от 15000</p>
          </div>
        </div>
        <div class="services__item-box">
          <ul>
            <li class="services__item">
              <p>Внедрение экологической политики, проведение "зеленых сессий" для персонала</p>
              <div class="price">
                <p class="price__old">от 20000 руб.</p>
                <p class="price__new">от 15000 руб.</p>
              </div>
            </li>
            <li class="services__item">
              <h3></h3>
              <div class="price">
                <p class="price__old"></p>
                <p class="price__new">от 15000</p>
              </div>
            </li>
            <li class="services__item">
              <h3></h3>
              <div class="price">
                <p class="price__old"></p>
                <p class="price__new">от 15000</p>
              </div>
            </li>
            <li class="services__item">
              <h3></h3>
              <div class="price">
                <p class="price__old"></p>
                <p class="price__new">от 15000</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Overlay from "../Background/Overlay";
import ButtonBack from "../controls/ButtonBack.vue";

export default {
  components: {
    ButtonBack,
    Overlay
  },
  data: () => ({
    isOpen: false
  }),
  mounted() {
    this.isOpen = true;
  },
  beforeRouteLeave(to, from, next) {
    this.isOpen = false;
    setTimeout(next, 750);
  }
};
</script>