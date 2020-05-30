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
        "<p>Завод, офис и человек производят отходы ежедневно, а значит каждый вносит вклад в их появление. Общество имеет все возможности улучшить экологию вокруг себя.</p><p>Хотите знать, с чего начать? Куда и какие продукты сдавать? Какие законы регулируют обращение с отходами? Как в офисе внедрить «зелёнподход»?</p> <p>Запишитесь на бесплатную консультацию и наш ый специалист свяжется с Вами.</p>",
      links: []
    }
  }),
  name: "home",
  components: {
    Main,
    Overlay
  }
};
</script>
