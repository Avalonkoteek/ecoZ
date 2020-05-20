<template>

  <section class="main">
    <div class="container">
      <div class="main__section">
       <h2 class="main__title">{{content.title}}</h2>
       <p class="main__description">{{content.description}}</p>
       <ul class="main__links">
          <li
          v-for="link in content.links"
          :key="link.url"
        >
        <router-link
          :to="link.url"
          active-class="active"
          append>
        {{link.title}}
        </router-link>
        </li>
       </ul>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  props: {
    content: Object
  }
}
</script>
