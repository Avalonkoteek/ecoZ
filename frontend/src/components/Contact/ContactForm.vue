<template>
  <section class="section">
    <div class="container">
      <ButtonBack :to="'/contact'" />
      <div class="contactForm__wrapper">
        <form class="contactForm">
          <div class="contactForm__box">
            <label class>
              <input type="checkbox" />
              Я соглашаюсь с
              <a>политикой обработки персональных данных</a>
            </label>
            <label for="name">Ваши ФИО или ФИ</label>
            <input type="text" name="name" placeholder="Антон Антонович Ерошин" />
            <label for="name">Ваши ФИО или ФИ</label>
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
export default {
  components: {
    ButtonBack
  }
};
</script>