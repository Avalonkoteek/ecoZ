<template>
  <nav class="navbar" >
    <div class="container">
      <Burger @click="isOpen = !isOpen" v-model="isOpen" v-if="!isMobile" />
      <div class="navbar__logo">
        <img v-if="isMobile" alt="Логотип ecoZ" src="../../assets/img/logo/Logo_ECO-Z.svg" />
        <img v-else alt="Логотип ecoZ" src="../../assets/img/logo/Logo_ECO-Z__mobile.svg" />
      </div>
      <div class="navbar__links" :class="{open:isOpen}">
        <ul>
          <li  v-for="link in links" :key="link.url" @click="isOpen = false">
            <router-link
              :to="link.url"
              class="navbar__link"
              active-class="active"
              :exact="link.exact"

            >{{link.title}}
            </router-link>
          </li>
        </ul>
        <div class="navbar__fond-img">
          <img src="../../assets/img/navbar/president_logo.svg" />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>

import Burger from "./Burger";


export default {
  name: "navbar",
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
