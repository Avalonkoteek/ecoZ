<template>
  <nav>
    <Burger @click="isOpen = !isOpen" v-model="isOpen"></Burger>
    <img class="logo" alt="Логотип ecoZ" src="../../assets/img/logo/Logo_ECO-Z__mobile.svg" />
    <ul class="links" :class="{open:isOpen}">
      <router-link
        v-for="link in links"
        :key="link.url"
        tag="li"
        active-class="active"
        :to="link.url"
        :exact="link.exact"
      >
        <a href="#" class="link">{{link.title}}</a>
      </router-link>
    </ul>
  </nav>
</template>
<script>
import Burger from "./Burger";
export default {
  props: ["value"],
  data: () => ({
    isOpen: false,
    links: [
      { title: "Главная", url: "/", exact: true },
      { title: "О Проекте", url: "/about" },
      { title: "Бизнесу", url: "/business" },
      { title: "Школам", url: "/school" },
      { title: "Волонтерам", url: "/volunteers" },
      { title: "Контакты", url: "/contact" }
    ]
  }),
  name: "navbar-mobile",
  components: {
    Burger
  }
};
</script>

<style scoped>
nav {
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 10vh;
  min-height: 80px;
  background: #afb0bc;
  padding: 15px 20px 0;
  position: relative;
}
@media (max-width: 500px) {
  nav {
    background: url("../../assets/img/navbar/nav_BG.png") no-repeat;
    background-size: cover;
    background-position: top center;
  }
}
.logo {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-width: 270px;
  height: auto;
  border: 1px solid black;
}
.links {
  position: absolute;
  left: 0;
  top: 0;
  width: 50%;
  display: flex;
  flex-direction: column;
  height: 100vh;
  
  padding-bottom: 20px;
  transform: translateX(-100%) rotate(-13deg);
  background:url("../../assets/img/navbar/bg_nav.svg") no-repeat;
  background-position: left center;
  background-size: contain;
  transition: all 2s ease;
  padding-top: 60px;
  padding-left: 20px;
    transform-origin: right bottom;
}
.links.open{
      transform: translateX(0%) rotate(0);
}
.links > li {
  margin-right: 30px;
}

.link {
  color: #afb0bc;
  transition: color 0.4s ease;
}
.link:hover {
  color: #c99072;
}
.links > li:last-of-type {
  margin-right: 0px;
}


</style>