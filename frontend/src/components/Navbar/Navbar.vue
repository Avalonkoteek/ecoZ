<template>
  <nav class="navbar">
    <div class="container">
      <Burger @click="isOpen = !isOpen" v-model="isOpen" v-if="!isMobile"></Burger>
      <img class="navbar__logo" alt="Логотип ecoZ" src="../../assets/img/logo/Logo_ECO-Z.svg" />
      <ul class="navbar__links">
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
    </div>
  </nav>
</template>
<script>
import Burger from "./Burger";
export default {
  name: "navbar",
  props: ["value"],
  data: () => ({
    isOpen: false,
    isMobile: true,
  
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
      this.isMobile = window.innerWidth > 640;
    
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

<style scoped>
.navbar {
  width: 100%;
  height: 110px;
  background-color: #fffaeb;
  position: absolute;
  z-index: 100;
  top: 0;
  padding: 15px 0;
  font-size: 30px;
}
.navbar > .container {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  height: 100px;
}
.logo {
  max-width: 270px;
  height: auto;
}
.navbar__links {
  display: flex;
  align-items: flex-end;
  padding-bottom: 20px;
}
.navbar__links > li {
  margin-right: 30px;
}

.navbar__link {
  color: #afb0bc;
  transition: color 0.4s ease;
}
.navbar__link:hover {
  color: #c99072;
}
.navbar__links > li:last-of-type {
  margin-right: 0px;
}

@media (max-width:1020px){
  .navbar{
    max-height: auto;
  }
 .navbar > .container {
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
 }
.navbar__links{
    margin-top:20px ;
  }
}
@media (max-width: 640px) {
  .navbar > .container {
   display: flex;
   flex-direction: row;
   justify-content: flex-start;
   align-items: center;
 }
  .navbar {
    background: url("../../assets/img/navbar/nav_BG.png") no-repeat;
    background-size: cover;
    background-position: top center;
  }
.logo{
  position: absolute;
  left:50%;
  top:50%;
  transform: translate(-50% -50%);
}
  .navbar__links {
    position: absolute;
    left: 0;
    top: 0;
    width: 50%;
    display: flex;
    flex-direction: column;
    height: 100vh;

    padding-bottom: 20px;
    transform: translateX(-100%) rotate(-13deg);
    background: url("../../assets/img/navbar/bg_nav.svg") no-repeat;
    background-position: left center;
    background-size: contain;
    transition: all 2s ease;
    padding-top: 60px;
    padding-left: 20px;
    transform-origin: right bottom;
  }
  .navbar__links.open {
    transform: translateX(0%) rotate(0);
  }
}


</style>