<template>
  <section class="main">
    <Overlay />
    <div class="container">
      <div class="main__section">
        <h2 class="main__title">{{content.title}}</h2>
        <ul class="contact__wrapper">
          <li class="contact__item">
            <img
              class="contact__social-img"
              alt="instagram"
              src="../assets/img/Contact/Insta_Icon.svg"
            />
            <a
              href="https://www.instagram.com/ecozelenograd/"
              target="__blank"
              class="contact__links link"
            >@ecozelenograd</a>
          </li>
          <li class="contact__item">
            <img
              class="contact__social-img"
              alt="instagram"
              src="../assets/img/Contact/Vk_Icon.svg"
            />
            <a
              href="https://www.instagram.com/ecozelenograd/"
              target="__blank"
              class="contact__links link"
            >vk.com/ecozrecycle</a>
          </li>
          <li class="contact__item">
            <img
              class="contact__social-img"
              alt="instagram"
              src="../assets/img/Contact/Mail_Icon.svg"
            />
            <a
              href="https://www.instagram.com/ecozelenograd/"
              target="__blank"
              class="contact__links link"
            >info.ecoz.org@gmail.com</a>
          </li>
          <li class="contact__item">
            <img
              class="contact__social-img"
              alt="instagram"
              src="../assets/img/Contact/Phone_Icon.svg"
            />
            <a
              href="https://www.instagram.com/ecozelenograd/"
              target="__blank"
              class="contact__links link"
            >+7 (111) 111-11-11</a>
          </li>
        </ul>
        <Breadcrumbs :links="content.links" />
      </div>
    </div>
  </section>
</template>

<script>
import Overlay from "../components/Background/Overlay";
import Breadcrumbs from "../components/controls/Breadcrumbs";
export default {
  data: () => ({
    content: {
      img: "../assets/img/Contact/Insta_Icon.svg",
      title: "Свяжитесь с нами удобным для вас способом",
      description: "",
      links: [{ name: "Контактная форма", to: "contact/contact_form" }]
    }
  }),
  components: {
    Breadcrumbs,
    Overlay
  },
  beforeRouteLeave(to, from, next) {
    console.log("почти ушел");
    console.log(to, from);
    next();
  },
  name: "contact"
};
</script>

<style >
</style>
