<template>
  <div id="app">
    <Navbar :pageTitle="getpageTitle" />

    <Background class="backgound-animation" v-model="layout" />
    <router-view />

    <Footer />

    <Icons />
  </div>
</template>

<script>
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Background from "./components/Background/Background";
import Icons from "./components/controls/Icons";

export default {
  computed: {
    getpageTitle() {
      return this.$route.meta.title || "Не знаю";
    },
    layout() {
      return (this.$route.meta.layout || "empty") + "-layout";
    }
  },
  components: {
    Navbar,
    Footer,
    Background,
    Icons
  }
};
</script>
