<template>
  <section class="main">
    <div class="container">
      <!-- Main Section -->
      <div class="main__section">
        <h2 class="main__title">{{content.title}}</h2>
        <p class="main__description">{{content.description}}</p>
        <!-- Links -->
        <Breadcrumbs :links="content.links" />
        <MainButton v-if="isHome" />
      </div>
    </div>
  </section>
</template>

<script>
import Breadcrumbs from "../controls/Breadcrumbs.vue";
import MainButton from "../controls/MainButton.vue";

export default {
  components: {
    Breadcrumbs,
    MainButton
  },
  computed: {
    isHome() {
      console.log(this.$route.name);
      return this.$route.name === "home";
    }
  },
  props: {
    content: Object
  }
};
</script>
