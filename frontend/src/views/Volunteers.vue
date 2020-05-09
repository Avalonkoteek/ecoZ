<template>
  <div class="volunteers">
    <Header v-bind:content="content"/>
  </div>
</template>

<script>
import Header from "../components/Header/Header";

export default {
  data: () => ({
    content:{
    title: "Присоединяйтесь к нашему дружному сообществу!",
    description: "Проект Эко-Z — это сообщество экологически активных людей. Присоединяйся к нашей команде и ты найдешь единомышленников, готовых менять наш Зеленоградский округ к лучшему конкретными шагами! ",
    links: [
      { title: "Дополнительная информация", url: "#"},
     
      
    ]
    }
  }),
  name: "volunteers",
  components: {
    Header
  }
};
</script>




