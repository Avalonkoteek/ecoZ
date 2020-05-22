<template>
  <div id="app">
    <Navbar />

    <Background v-model="layout" />
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
    layout() {
      return (this.$route.meta.layout || "empty") + "-layout";
    }
  },
  components: {
    Navbar,
    Footer,
    Background,
    Icons
  },
};
</script>
