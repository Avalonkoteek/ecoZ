<template>
  <header class="header">
    <div class="container">
      <div class="header__section">
       <h1 class="header__title">{{content.title}}</h1>
       <p class="header__description">{{content.description}}</p>
       <ul class="header__links">
          <li
          v-for="link in content.links"
          :key="link.url"
        >
          <a href="#" @click.prevent="">{{link.title}}</a>
        </li>
       </ul>
      </div>
    </div>
  </header>
</template>
<script>

import './Header.css';

export default {
  props:['content'],

}
</script>
