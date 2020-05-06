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
  components: {
    MainLayout
  },

  computed: {
    layout() {
      return (this.$route.meta.layout || 'empty')+ '-layout';
    }
  },
};
</script>

