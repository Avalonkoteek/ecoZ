<template>
  <ul class="breadcrumbs">
    <li class="breadcrumbs__item" :class="link.class" v-for="link in links" :key="link.name">
      <router-link
        class="link breadcrumbs__link"
        :to="link.to"
        active-class="is-active"
      >
        {{link.name}}
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    links: Array
  },
};
</script>
