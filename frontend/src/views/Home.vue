<template>
  <div class="home">
    <Main v-bind:content="getMain" />
  </div>
</template>

<script>
import Main from "../components/Main/Main";

import { mapGetters } from "vuex";

export default {
  name: "home",
  metaInfo() {
    return {
      title: this.$title("Главная"),
    };
  },
  components: {
    Main,
  },
  data: () => ({
    content: {
      title: "Экология — ответственность каждого",
      description:
        "<p>Завод, офис и человек производят отходы ежедневно, а значит каждый вносит вклад в их появление. Общество имеет все возможности улучшить экологию вокруг себя.</p><p>Хотите знать, с чего начать? Куда и какие продукты сдавать? Какие законы регулируют обращение с отходами? Как в офисе внедрить «зелёнподход»?</p> <p>Запишитесь на бесплатную консультацию и наш ый специалист свяжется с Вами.</p>",
      links: [],
    },
  }),
  computed: {
    ...mapGetters(["getMain"]),
  },
};
</script>
