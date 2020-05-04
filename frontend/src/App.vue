<template>
  <div id="app">
  <component :is="layout" />
    <router-view />
  </div>
</template>
<script>

import './App.css';

import MainLayout from "./layouts/MainLayout";

export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || 'empty')+ '-layout';
    }
  },

  components: {
    MainLayout
  }
};
</script>
