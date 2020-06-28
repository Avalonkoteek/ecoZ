<template>
  <section class="section section--contact">
    <Overlay v-model="isOpen" />
    <div class="container" ref="pageExit">
      <ButtonBack :to="'/contact'" />
      <div class="contactForm__wrapper">
        <form class="contactForm" @submit.prevent="submitHandler">
          <div class="contactForm__box">
            <Checkbox v-model.trim="$v.check.$model" :class="{
                  invalid: $v.check.$error,
                  correct: !$v.check.$invalid,
                }"/>
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
                type="text"
                name="tel"
                placeholder="+7 777 777 77 77"
                @keyup="mask($event)"
                @focus="mask($event)"
                @blur="mask($event)"
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
                :option-height="150"
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
    <transition name='fade-in' >
      <v-popup class="contactForm__popup" v-if="showPopup" @close="closePopup">
        <template v-slot:body>
          <div class="contactForm__popup-img">
            <img src="../../assets/img/checkbox.png" alt="">
          </div>
          <p class="contactForm__popup-text">
              Заявка успешно отправлена
          </p>
        </template>
        <template v-slot:footer>
            <button class="close">
              <span class="v-popup__close" @click="closePopup"/>
            </button>
            <button class="contactForm__popup-btn" @click="closePopup">
              OK
            </button>
        </template>
      </v-popup>
    </transition>
  </section>
</template>
<script>


import Overlay from "../Background/Overlay";
import ButtonBack from "../controls/ButtonBack.vue";
import VPopup from "../controls/VPopup.vue";
import Checkbox from "../controls/Checkbox.vue";

import {
  email,
  required,
  minLength,
  maxLength,
  helpers
} from "vuelidate/lib/validators";

const nameRu = /^[ \-а-яё]*$/i;

export default {
  components: {
    ButtonBack,
    Checkbox,
    Overlay,
    VPopup,
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
    showPopup: true,
  }),
  validations: {
    name: {
      name: helpers.regex('name', nameRu),
      required
    },
    email: {
      email,
      required },
    check: {
      required,
    },
    text: { required },
    phone: {
      minLength: minLength(18),
      maxLength: maxLength(18),
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

    mask(event) {
      const keyCode = event.keyCode;
      const mask = "+7 (___) ___ __-__";
      let length = 0;
      const defaultValue = mask.replace(/\D/g, "");
      const number = this.phone.replace(/\D/g, "");

      let newNumber = mask.replace(/[_\d]/g, (value) => {
          return length < number.length ? number.charAt(length++) || defaultValue.charAt(length) : value
      });

      length = newNumber.indexOf("_");

      if (length != -1) {
        length < 5 && (length = 3);
        newNumber = newNumber.slice(0, length)
      }

      let reg = mask.substr(0, this.phone.length)
      .replace(/_+/g, (string) => "\\d{1," + string.length + "}")
      .replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");

      if (!reg.test(this.phone) || this.phone.length < 5 || keyCode > 47 && keyCode < 58) this.phone = newNumber;

      if (this.phone.slice(-1) == '-' || this.phone.slice(-1) == ' ') {
        this.phone = this.phone.slice(0, -1)
      }

      if (event.type == "blur" && this.phone.length < 5)
        this.phone = ""

    },

    closePopup() {
      this.showPopup = false;
    }
  },
};
</script>

<style>
  .select {
    margin-top: 50px;
  }

  .multiselect__tags {
    padding-left: 10px;
  }

  .select .multiselect__tags {
    font-size: 20px !important;
  }

  .multiselect__input {
    font-size: 20px !important;
    padding-left: 0;
  }

  .multiselect__single {
    font-size: 20px !important;
  }
</style>
