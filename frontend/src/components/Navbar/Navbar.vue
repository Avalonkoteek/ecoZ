<template>
  <nav>
    <div class="logo"></div>
    <ul class='links'>
      <router-link
        v-for="link in links"
        :key="link.url"
        tag="li"
        active-class="active"
        :to="link.url"
        :exact="link.exact"
      >
        <a href="#" class="">{{link.title}}</a>
      </router-link>
    </ul>
  </nav>
</template>
<script>
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