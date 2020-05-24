<template>

  <section class="main">
    <div class="container">
      <div class="main__section">
       <h2 class="main__title">{{content.title}}</h2>
       <p class="main__description">{{content.description}}</p>

        <Breadcrumbs  :links="content.links"/>
      </div>
    </div>
  </section>
</template>

<script>
import Breadcrumbs from "../controls/Breadcrumbs.vue";

export default {
  components: {
    Breadcrumbs,
  },

  props: {
    content: Object
  }
}
</script>
