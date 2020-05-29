<template>
  <div class="volunteers">
    <Overlay v-model="isOpen" />
    <Main v-bind:content="content" />
  </div>
</template>

<script>
import Main from "../components/Main/Main";
import Overlay from "../components/Background/Overlay";

export default {
  data: () => ({
    content: {
      title: "Присоединяйтесь к нашему дружному сообществу!",
      description:
        "Проект Эко-Z — это сообщество экологически активных людей. Присоединяйся к нашей команде и ты найдешь единомышленников, готовых менять наш Зеленоградский округ к лучшему конкретными шагами! ",
      links: [{ title: "Дополнительная информация", url: "#2" }]
    }
  }),
  name: "volunteers",
  components: {
    Main,
    Overlay
  }
};
</script>
