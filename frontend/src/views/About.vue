<template>
  <div class="about">
    <Header v-bind:content="content"/>
  </div>
</template>

<script>
import Header from "../components/Header/Header";

export default {
  data: () => ({
    content:{
    title: "Eco-Z - проект организации «Экология будущего»",
    description: "Хотите знать, с чего начать? Куда и какие продукты сдавать? Какие законы регулируют обращение с отходами? Как в офисе внедрить «зелёный подход»? ",
    links: [
      { title: "Цели", url: "#"},
      { title: "Деятельность", url: "#" },
      { title: "Партнеры", url: "#" },
      
    ]
    }
  }),
  name: "about",
  components: {
    Header
  }
};
</script>
