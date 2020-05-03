<template>
  <div id="app">
  <component :is="layout" />
    <router-view />
  </div>
</template>
<script>

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
<style>
@import "assets/index.css";
</style>
