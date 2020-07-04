<template>
  <div class="school">
    <Main v-bind:content="getEducation" />
  </div>
</template>

<script>
import Main from "../components/Main/Main";

import { mapGetters } from "vuex";

export default {
  name: "school",
  components: {
    Main
  },
  computed: {
    ...mapGetters(['getEducation'])
  }
};
</script>
