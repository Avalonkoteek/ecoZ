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
import MainLayout from "./layouts/MainLayout";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";




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

