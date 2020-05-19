<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar__wrapper">
        <!-- <Burger @click="isOpen = !isOpen" v-model="isOpen" v-if="!isMobile" /> -->
        <div class="navbar__logo">
          <img class="navbar__img navbar__img--desk" alt="Логотип ecoZ" src="../../assets/img/logo/Logo_ECO-Z.svg" />
          <img class="navbar__img navbar__img--mobile" alt="Логотип ecoZ" src="../../assets/img/logo/Logo_ECO-Z__mobile.svg" />
        </div>
          <ul class="navbar__list" :class="{open:isOpen}">
            <li class="navbar__item" v-for="link in links" :key="link.url" @click="isOpen = false">
              <router-link
                :to="link.url"
                class="navbar__link link"
                active-class="active"
                :exact="link.exact"

              >{{link.title}}
              </router-link>
            </li>
          </ul>
          <button class="navbar__btn" />

          <!-- <div class="navbar__fond-img">
            <img src="../../assets/img/navbar/president_logo.svg" />
          </div> -->
      </div>
    </div>
    <div class="navbar__mobile-menu">

    </div>
  </nav>
</template>

<script>


// import Burger from "./Burger";

export default {
  name: "navbar",
  data: () => ({
    // isOpen: false,
    isMobile: false,

    links: [
      { title: "Главная", url: "/", exact: true },
      { title: "О Проекте", url: "/about" },
      { title: "Бизнесу", url: "/business" },
      { title: "Школам", url: "/school" },
      { title: "Волонтерам", url: "/volunteers" },
      { title: "Контакты", url: "/contact" }
    ]
  }),

  methods: {
    // updateWidth() {
    //   this.isMobile = window.innerWidth > 1023;
    // }
  },
  created() {
    // window.addEventListener("resize", this.updateWidth);
    // this.updateWidth();
  },
  components: {
    // Burger
  }
};
</script>
