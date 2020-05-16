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
          <a href="/" @click.prevent="">{{link.title}}</a>
        </li>
       </ul>
      </div>
    </div>
  </section>
</template>
<script>

import './Main.css';

export default {
  props:['content'],

}
</script>
