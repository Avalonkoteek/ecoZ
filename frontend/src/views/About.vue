<template>
  <div class="about">
    <Main v-bind:content="getAbout" />
  </div>
</template>

<script>
import Main from "../components/Main/Main";

import { mapGetters } from "vuex";

export default {
  name: "about",
  components: {
    Main
  },
  computed: {
    ...mapGetters(['getAbout'])
  },
};
</script>
