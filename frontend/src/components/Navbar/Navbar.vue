<template>
  <header class="navbar">
    <!-- SVG ФОН для планшетов и мобилок-------------------------------------------------->
    <svg
      class="navbar__topBackground"
      xmlns="http://www.w3.org/2000/svg"
      width="328"
      height="61"
      v-if="!isMobile"
      viewBox="0 0 328 61"
      preserveAspectRatio="none"
    >
      <path
        id="Intersection_1"
        data-name="Intersection 1"
        d="M326.893,240.443q-.024-.186-.05-.44a7.345,7.345,0,0,0-1.3-3.491,11.167,11.167,0,0,0-3.062-2.874,33.246,33.246,0,0,0-10.933-4.084c-8.6-1.9-20.956-2.82-37.785-2.82-22.948,0-51.177,1.687-81.061,3.472l-4.4.263c-34.255,2.043-64.89,3.733-92.917,3.734-28.409,0-49.657-1.8-64.957-5.518a85.338,85.338,0,0,1-11.507-3.59A45.974,45.974,0,0,1,9.9,220.388a25.348,25.348,0,0,1-6.239-5.943A18.24,18.24,0,0,1,.5,207.152V180.444h327v46.251c-.082,7.369-.2,12.236-.366,13.748Z"
        transform="translate(0 -179.943)"
        fill="#fffaeb"
        stroke="#fffaeb"
        stroke-width="1"
      />
    </svg>

    <!-- Навигация -->
    <div class="container">
      <!-- Компоненты для планшетов и мобильных --------------------->
      <Burger class="navbar__burger" @click="isOpen = !isOpen" v-model="isOpen" v-if="!isMobile" />
      <a href="#" class="navbar__pageTitle" v-if="!isMobile">{{pageTitle}}</a>

      <!-- ЛОГОТИП ------------------------------->
      <router-link to="/" class="navbar__logo">
        <img v-if="isMobile" alt="Логотип ecoZ" src="../../assets/img/logo/Logo.svg" />
        <img v-else alt="Логотип ecoZ" src="../../assets/img/logo/Logo_ECO-Z__mobile.svg" />
      </router-link>

      <!-- ГРУППА ОСНОВНЫХ ССЫЛОК ----------------------->
      <nav class="navbar__wrapper" :class="{open:isOpen}">
        <ul class="navbar__list">
          <li class="navbar__item" v-for="link in links" :key="link.url" @click="isOpen = false">
            <router-link
              :to="link.url"
              class="link navbar__link"
              active-class="active"
              :exact="link.exact"
            >{{link.title}}</router-link>
          </li>
        </ul>
        <div class="navbar__fond-img">
          <img src="../../assets/img/navbar/president_logo.svg" />
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import Burger from "./Burger";

export default {
  name: "navbar",
  props: ["pageTitle"],
  data: () => ({
    isOpen: false,
    isMobile: false,

    links: [
      { title: "Главная", url: "/home", exact: true },
      { title: "О Проекте", url: "/about" },
      { title: "Бизнесу", url: "/business" },
      { title: "Школам", url: "/school" },
      { title: "Волонтерам", url: "/volunteers" },
      { title: "Контакты", url: "/contact" }
    ]
  }),

  methods: {
    updateWidth() {
      this.isMobile = window.innerWidth > 1023;
    }
  },
  created() {
    window.addEventListener("resize", this.updateWidth);
    this.updateWidth();
  },
  components: {
    Burger
  }
};
</script>
