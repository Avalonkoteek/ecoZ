<template>
  <div class="volunteers">
    <Main v-bind:content="content" />
  </div>
</template>

<script>
import Main from "../components/Main/Main";

export default {
  data: () => ({
    content: {
      title: "Присоединяйтесь к нашему дружному сообществу!",
      description:
        "Проект Эко-Z — это сообщество экологически активных людей. Присоединяйся к нашей команде и ты найдешь единомышленников, готовых менять наш Зеленоградский округ к лучшему конкретными шагами! ",
      links: []
    }
  }),
  name: "volunteers",
  components: {
    Main
  }
};
</script>
