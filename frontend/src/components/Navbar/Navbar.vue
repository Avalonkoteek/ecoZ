<template>
  <nav>
    <img class="logo" alt="Логотип ecoZ" src="../../assets/img/logo/Logo_ECO-Z.svg"/>
    <ul class='links'>
      <router-link
        v-for="link in links"
        :key="link.url"
        tag="li"
        active-class="active"
        :to="link.url"
        :exact="link.exact"
      >
        <a href="#" class="link">{{link.title}}</a>
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
    padding:15px 65px 0;
    
}
.logo{
    max-width: 270px;
    height: auto;
    border:1px solid black;
}
.links{
    display: flex;
    align-items: flex-end;
    padding-bottom:20px;
    
}
.links>li{
    margin-right: 30px;
}

.link{
color: #AFB0BC;
transition: color 0.4s ease;
}
.link:hover{
    color:#C99072;
}
.links>li:last-of-type{
     margin-right: 0px;
}

</style>