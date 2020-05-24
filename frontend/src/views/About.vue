<template>
  <div class="about">
    <Main v-bind:content="content"/>
  </div>
</template>

<script>

import Main from "../components/Main/Main";


export default {
  data: () => ({
    content:{
      title: "Eco-Z - проект организации «Экология будущего»",
      description: "Хотите знать, с чего начать? Куда и какие продукты сдавать? Какие законы регулируют обращение с отходами? Как в офисе внедрить «зелёный подход»? ",
      links: [
        { name: "Цели", to: "#1"},
        { name: "Деятельность", to: "#2" },
        { name: "Партнеры", to: "partners" },
      ]
      }
    }),
  name: "about",
  components: {
    Main
  }
};
</script>
