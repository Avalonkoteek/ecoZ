<template>
  <section class="section">
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
            <label for="name">Ваши ФИО или ФИ</label>
            <input type="text" name="name" />
            <label for="name">Ваши ФИО или ФИ</label>
            <input type="text" name="name" />
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
import ButtonBack from "../controls/ButtonBack.vue";
import Checkbox from "../controls/Checkbox.vue";
export default {
  components: {
    ButtonBack,
    Checkbox
  }
};
</script>