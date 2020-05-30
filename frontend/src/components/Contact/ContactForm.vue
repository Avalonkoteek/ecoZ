<template>
  <section class="section section--contact">
    <Overlay v-model="isOpen" />
    <div class="container">
      <ButtonBack :to="'/contact'" />
      <div class="contactForm__wrapper">
        <form class="contactForm" @submit.prevent="submitHandler">
          <div class="contactForm__box">
            <Checkbox />
            <div class="contactForm__item">
              <label
                class="contact__text"
                :class="{
                  invalid: $v.name.$dirty && !$v.name.required,
                }"
                for="name"
                >Ваши ФИО или ФИ</label
              >
              <input
                class="contactForm__input"
                type="text"
                name="name"
                placeholder="Антон Антонович Ерошин"
                v-model.trim="email"
                :class="{
                  invalid: $v.name.$dirty && !$v.name.required,
                }"
              />
            </div>
            <div class="contactForm__item">
              <label
                class="contact__text"
                for="email"
                :class="{
                  invalid:
                    ($v.email.$dirty && !$v.email.required) ||
                    ($v.email.$dirty && !$v.email.email),
                }"
                >E-mail для связи</label
              >
              <input
                class="contactForm__input"
                type="email"
                name="name"
                placeholder="Антон Антонович Ерошин"
                :class="{
                  invalid:
                    ($v.email.$dirty && !$v.email.required) ||
                    ($v.email.$dirty && !$v.email.email),
                }"
              />
            </div>
            <div class="contactForm__item">
              <label class="contact__text" for="tel">Ваш номер телефона</label>
              <input
                type="tel"
                name="tel"
                placeholder="+7 777 777 77 77"
                class="contactForm__input"
              />
            </div>

            <Select />
          </div>
          <div class="contactForm__box">
            <p
              class="contact__text"
              :class="{
                correct: $v.text.$dirty && !$v.text.required,
              }"
            >
              Текст сообщения
            </p>
            <textarea
              class="contactForm__textarea"
              placeholder="Ваше сообщение..."
              :class="{
                correct: $v.text.$dirty && !$v.text.required,
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
import Select from "../controls/Select.vue";
import { email, required } from "vuelidate/lib/validators";
export default {
  components: {
    ButtonBack,
    Checkbox,
    Overlay,
    Select,
  },
  name: "contactForm",

  data: () => ({
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
  },
  mounted() {
    this.isOpen = true;
  },
  beforeRouteLeave(to, from, next) {
    this.isOpen = false;
    setTimeout(next, 750);
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
