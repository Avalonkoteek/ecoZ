<template>
  <nav class="navbar" display="none">
    <div class="container">
      <Burger @click="isOpen = !isOpen" v-model="isOpen" v-if="!isMobile"></Burger>
      <div class="navbar__logo">
        <img
          v-if="isMobile"
       
          alt="Логотип ecoZ"
          src="../../assets/img/logo/Logo_ECO-Z.svg"
        />
        <img
          v-else
        
          alt="Логотип ecoZ"
          src="../../assets/img/logo/Logo_ECO-Z__mobile.svg"
        />
      </div>
      <div class="navbar__links" :class="{open:isOpen}">
      <ul >
        <router-link
          v-for="link in links"
          :key="link.url"
          tag="li"
          active-class="active"
          :to="link.url"
          :exact="link.exact"
        >
          <a href="#" class="navbar__link">{{link.title}}</a>
        </router-link>
      </ul>
      <div class="navbar__fond-img">
        <img src='../../assets/img/navbar/president_logo.svg'>
      </div>
      </div>
    </div>
  </nav>
</template>
<script>
import Burger from "./Burger";
import "./Navbar.css";
export default {
  name: "navbar",
  data: () => ({
    isOpen: false,
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
    updateWidth() {
      this.isMobile = window.innerWidth > 1024;
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

