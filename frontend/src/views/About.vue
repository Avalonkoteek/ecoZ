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
      { title: "Цели", url: "#1"},
      { title: "Деятельность", url: "#2" },
      { title: "Партнеры", url: "#3" },

    ]
    }
  }),
  name: "about",
  components: {
    Main
  }
};
</script>
