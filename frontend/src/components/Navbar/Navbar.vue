<template>
  <nav>
    <img class="logo" alt="Логотип ecoZ" src="/public/logo/Logo_ECO-Z.svg"/>
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

<style scoped>
nav{
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: 10vh;
    min-height: 80px;
    background-color: #FFFAEB;
}
.logo{
    width: 270px;
    height: auto;
}
.links{
    display: flex;
}
.links>li{
    margin-right: 20px;
}

</style>