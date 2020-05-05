<template>
  <header class="header">
    <div class="container">
      <div class="header__section">
        <img class="header__logo" alt="Логотип ecoZ" src="../../assets/img/svg/Logo_ECO-Z.svg">
        <ul class='header__list'>
          <router-link
            v-for="link in links"
            :key="link.url"
            tag="li"
            active-class="active"
            :to="link.url"
            :exact="link.exact"
            class="header__item"
          >
            <a href="#" class="link">{{link.title}}</a>
          </router-link>
        </ul>
      </div>
    </div>
  </header>
</template>
<script>

import './Header.css';

export default {
  props:['value'],
  data:()=>({
    links:[
      {title:"Главная", url:'/',exact:true},
      {title:"О Проекте", url:'/about'},
      {title:"Бизнесу", url:'/business'},
      {title:"Школам", url:'/school'},
      {title:"Волонтерам", url:'/volunteers'},
      {title:"Контакты", url:'/contact'},
    ]
  })
}
</script>
