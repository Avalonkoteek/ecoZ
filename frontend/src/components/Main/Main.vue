<template>
  <section class="main">
    <Overlay />
    <div class="container">
      <!-- Main Section -->
      <div class="main__section">
        <h2 class="main__title">{{content.title}}</h2>
        <div class="main__description" v-html="content.description"></div>
        <!-- Links -->
        <Breadcrumbs :links="content.links" />
        <router-link to="/contact/contact_form">
          <MainButton v-if="isHome" />
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import Breadcrumbs from "../controls/Breadcrumbs.vue";
import MainButton from "../controls/MainButton.vue";
import Overlay from "../Background/Overlay";

export default {
  components: {
    Breadcrumbs,
    MainButton,
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
