<template>
  <section class="section section--contact">
    <Overlay v-model="isOpen" />
    <div class="container" ref="pageExit">
      <ButtonBack :to="'/contact'" />
      <div class="contactForm__wrapper">
        <form class="contactForm" @submit.prevent="submitHandler">
          <div class="contactForm__box">
            <Checkbox />
            <div class="contactForm__item">
              <label
                class="contact__text importand-field"
                :class="{
                  invalid: $v.name.$error,
                  correct: !$v.name.$invalid,
                }"
                for="name"
                >Ваши ФИО или ФИ</label
              >
              <input
                autofocus
                class="contactForm__input"
                type="text"
                name="name"
                placeholder="Антон Антонович Ерошин"
                v-model.trim="$v.name.$model"
                :class="{
                  invalid: $v.name.$error,
                  correct: !$v.name.$invalid,
                }"
              />
            </div>
            <div class="contactForm__item">
              <label
                class="contact__text importand-field"
                for="email"
                :class="{
                  invalid: $v.email.$error,
                  correct: !$v.email.$invalid,
                }"
                >E-mail для связи</label
              >
              <input
                autofocus
                class="contactForm__input"
                type="email"
                name="name"
                v-model.trim="$v.email.$model"
                placeholder="Антон@Anton.ha"
                :class="{
                  invalid: $v.email.$error,
                  correct: !$v.email.$invalid,
                }"
              />
            </div>
            <div class="contactForm__item">
              <label
                class="contact__text"
                for="tel"
                :class="{
                  invalid: $v.phone.$error,
                  correct: !$v.phone.$invalid,
                }"
                >Ваш номер телефона</label
              >
              <input
                type="tel"
                name="tel"
                placeholder="+7 777 777 77 77"
                class="contactForm__input"
                v-model.trim="$v.phone.$model"
                :class="{
                  invalid: $v.phone.$error,
                  correct: !$v.phone.$invalid,
                }"
              />
            </div>

            <!-- <Select /> -->
            <div class="select">
              <Multiselect
                v-model="selectValue"
                :options="options"
                :max-height="160"
                placeholder="Хочу узнать о мероприятии"
                selectLabel="Выбрать"
                selectedLabel="Выбрано"
                deselectLabel="Удалить"
              ></Multiselect>
            </div>
          </div>
          <div class="contactForm__box">
            <p
              class="contact__text importand-field"
              :class="{
                invalid: $v.text.$error,
                correct: !$v.text.$invalid,
              }"
            >
              Текст сообщения
            </p>
            <textarea
              class="contactForm__textarea"
              placeholder="Ваше сообщение..."
              v-model.trim="$v.text.$model"
              :class="{
                invalid: $v.text.$error,
                correct: !$v.text.$invalid,
              }"
            />
            <button class="contactForm__submit-button" type="submit">
              <span>Отправить</span>
            </button>
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

import {
  email,
  required,
  minLength,
  maxLength,
} from "vuelidate/lib/validators";
export default {
  components: {
    ButtonBack,
    Checkbox,
    Overlay,
  },
  name: "contactForm",

  data: () => ({
    options: [
      "Предложение партнерства",
      "Хочу написать о вас статью",
      "Вопрос по услугам",
      "Другое",
    ],
    selectValue: null,
    isOpen: false,
    email: "",
    name: "",
    text: "",
    phone: "",
  }),
  validations: {
    email: { email, required },
    name: { required },
    text: { required },
    phone: {
      minLength: minLength(10),
      maxLength: maxLength(12),
    },
  },
  mounted() {
    let { pageExit } = this.$refs;
    pageExit.classList.add("container--contact");
    this.isOpen = true;
    let selector = document.querySelector(".multiselect__content-wrapper");
    selector.classList.add("scrollbar");
    selector.classList.add("scrollbar--select");
  },
  beforeRouteLeave(to, from, next) {
    let { pageExit } = this.$refs;
    pageExit.classList.remove("container--contact");
    pageExit.classList.add("container--contact-exit");
    this.isOpen = false;
    setTimeout(next, 400);
  },
  methods: {
    submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      this.$router.push("/");
    },
  },
};
</script>
<style scoped>
.select {
  margin-top: 50px;
}
</style>
