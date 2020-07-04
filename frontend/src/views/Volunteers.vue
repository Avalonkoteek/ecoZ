<template>
  <div class="volunteers">
    <Main v-bind:content="getVolunteers" />
  </div>
</template>

<script>
import Main from "../components/Main/Main";

import { mapGetters } from "vuex";

export default {
  metaInfo() {
    return {
      title: this.$title("Волонтерам"),
    };
  },
  name: "volunteers",
  components: {
    Main,
  },
  data: () => ({
    content: {
      title: "Присоединяйтесь к нашему дружному сообществу!",
      description:
        "Проект Эко-Z — это сообщество экологически активных людей. Присоединяйся к нашей команде и ты найдешь единомышленников, готовых менять наш Зеленоградский округ к лучшему конкретными шагами! ",
      links: [],
    },
  }),
  computed: {
    ...mapGetters(["getVolunteers"]),
  },
};
</script>
