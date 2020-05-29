<template>
  <div class="home">
    <Overlay />
    <Main v-bind:content="content" />
  </div>
</template>

<script>
import Overlay from "../components/Background/Overlay";
import Main from "../components/Main/Main";

export default {
  data: () => ({
    content: {
      title: "Экология — ответственность каждого",
      description:
        "Завод, офис и человек производят отходы ежедневно, а значит каждый вносит вклад в их появление. Общество имеет все возможности улучшить экологию вокруг себя. Хотите знать, с чего начать? Куда и какие продукты сдавать? Какие законы регулируют обращение с отходами? Как в офисе внедрить «зелёный подход»? Запишитесь на бесплатную консультацию и наш специалист свяжется с Вами.",
      links: [
        { name: "Записаться на консультацию", to: "/", class: "home-button" }
      ]
    }
  }),
  name: "home",
  components: {
    Main,
    Overlay
  }
};
</script>
