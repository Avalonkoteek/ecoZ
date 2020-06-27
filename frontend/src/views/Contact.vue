<template>
  <section class="main">
    <Overlay />
    <div class="container">
      <div class="main__section">
        <h2 class="main__title">{{ content.title }}</h2>
        <ul class="contact__wrapper">
          <li class="contact__item">
            <a
              href="https://www.instagram.com/ecozelenograd/"
              target="__blank"
              class="contact__links link"
            ><v-svg name="ig" width="35" height="35" />@ecozelenograd</a>
          </li>
          <li class="contact__item">
            <a
              href="https://www.instagram.com/ecozelenograd/"
              target="__blank"
              class="contact__links link"
            ><v-svg name="vk" width="35" height="35" />vk.com/ecozrecycle</a>
          </li>
          <li class="contact__item">
            <a
              href="https://www.instagram.com/ecozelenograd/"
              target="__blank"
              class="contact__links link"
            ><v-svg name="mail" width="35" height="35" />info.ecoz.org@gmail.com</a>
          </li>
          <li class="contact__item">
            <a
              href="https://www.instagram.com/ecozelenograd/"
              target="__blank"
              class="contact__links link"
            ><v-svg name="phone" width="35" height="35" />+7 (111) 111-11-11</a>
          </li>
        </ul>
        <Breadcrumbs :links="content.links" />
      </div>
    </div>
  </section>
</template>

<script>

import VSvg from "../components/controls/VSvg.vue";


import Breadcrumbs from "../components/controls/Breadcrumbs";
import Overlay from "../components/Background/Overlay";
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
    VSvg,

    Breadcrumbs,
    Overlay
  },

  name: "contact"
};
</script>

<style></style>
