<template>
  <div class="business">
    <Header v-bind:content="content"/>
  </div>
</template>

<script>
import Header from "../components/Header/Header";

export default {
  data: () => ({
    content:{
    title: "Приглашаем предприятия к сотрудничеству ",
    description: "Обращаясь к нам за платными услугами, вы помогаете работать нашей некоммерческой организации и выполнять поставленные нами цели и задачи",
    links: [
      { title: "Социальная ответсвенность бизнеса", url: "#"},
      { title: "Услуги", url: "#" },
      
    ]
    }
  }),
  name: "business",
  components: {
    Header
  }
};
</script>
