<template>
  <div id="app">
    <preloader v-if="!isLoading" />
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
import Preloader from "./components/Preloader/Preloader";
import Icons from "./components/controls/Icons";

import { mapActions } from 'vuex';

export default {
  data() {
    return {
      isLoading: false
    }
  },
  computed: {
    getpageTitle() {
      return this.$route.meta.title || "Не знаю";
    },
    layout() {
      return (this.$route.meta.layout || "empty") + "-layout";
    },
  },

  methods: {
    ...mapActions(['fetchPages','fetchParters', 'fetchServices']),
    loading() {
      setTimeout(() => {
          this.isLoading = true
      }, 1500)
    }
  },

  created() {
    // this.loading()
    document.addEventListener('DOMContentLoaded', () => this.loading());
    this.fetchPages();
    this.fetchParters();
    this.fetchServices();
  },
  async mounted() {

    // await this.$store.dispatch("fetchLinks");
  },
  components: {
    Navbar,
    Footer,
    Background,
    Icons,
    Preloader
  },
};
</script>
