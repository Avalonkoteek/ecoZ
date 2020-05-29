<template>
  <section class="section section__contact">
    <Overlay v-model="isOpen" />
    <div class="container">
      <ButtonBack :to="'/contact'" />
      <div class="contactForm__wrapper">
        <form class="contactForm">
          <div class="contactForm__box">
            <Checkbox />
            <label for="name">Ваши ФИО или ФИ</label>
            <input type="text" name="name" placeholder="Антон Антонович Ерошин" />
            <label for="name">E-mail для связи</label>
            <input type="email" name="name" />
            <label for="name">Ваш номер телефона</label>
            <input type="tel" name="name" />
            <select>
              <option>Пункт 1</option>
              <option>Пункт 2</option>
            </select>
          </div>
          <div class="contactForm__box">
            <textarea />
            <button class="contactForm__submit-button"></button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
<script>
import Overlay from "../Background/Overlay";
import ButtonBack from "../controls/ButtonBack.vue";
import Checkbox from "../controls/Checkbox.vue";
export default {
  components: {
    ButtonBack,
    Checkbox,
    Overlay
  },
  data: () => ({
    isOpen: false
  }),
  mounted() {
    this.isOpen = true;
  },
  beforeDestroy() {
    this.isOpen = false;
  }
};
</script>