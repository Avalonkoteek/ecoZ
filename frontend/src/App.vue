<template>
  <div id="app">
    <Navbar />
    <component :is="layout" />

    <router-view />
  
    <Footer />
  </div>
</template>
<script>

import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import MainLayout from "./layouts/MainLayout";


export default {
  components: {
    MainLayout,
    Navbar,
    Footer
  },

  computed: {
    layout() {
      return (this.$route.meta.layout || "empty") + "-layout";
    }
  }
};
</script>
<style>
/* @import './assets/styles/normalize.css';
@import './assets/styles/fonts.css';
@import './assets/styles/customProperties.css';
@import './assets/styles/customMedia.css';
@import './assets/styles/base.css';
@import './assets/styles/container.css'; */


</style>

