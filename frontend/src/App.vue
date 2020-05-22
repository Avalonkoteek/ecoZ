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

export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || "empty") + "-layout";
    }
  },
  components: {
    Navbar,
    Footer,
<<<<<<< HEAD
    Background,
    Icons
  },
=======
    Background
  }
>>>>>>> 8b2f7d1382d855a48443001e3fc5aff3b99907ac
};
</script>
