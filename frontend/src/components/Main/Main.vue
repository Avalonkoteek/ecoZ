<template>
  <section class="main">
    <Overlay />
    <div class="container">
      <!-- Main Section -->
      <div class="main__section">
        <h2 class="main__title">{{content.title}}</h2>
        <div class="main__description" v-html="content.description"></div>
        <!-- Links -->
        <Breadcrumbs v-if="!isHome" :links="content.links" />
        <a class="home-button" v-else target="_blank" href="https://a.eco-z.org/reservation-form/">
        Записаться на консультацию
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import Breadcrumbs from "../controls/Breadcrumbs.vue";
import Overlay from "../Background/Overlay";

export default {
  components: {
    Breadcrumbs,
    Overlay
  },
  computed: {
    isHome() {
      return this.$route.name === "home";
    }
  },
  props: {
    content: Object
  }
};
</script>
