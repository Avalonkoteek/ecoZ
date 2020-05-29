<template>
  <div class="business">
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
      title: "Приглашаем предприятия к сотрудничеству ",
      description:
        "Обращаясь к нам за платными услугами, вы помогаете работать нашей некоммерческой организации и выполнять поставленные нами цели и задачи",
      links: [
        { title: "Социальная ответсвенность бизнеса", url: "#" },
        { title: "Услуги", url: "#2" }
      ]
    }
  }),
  name: "business",
  components: {
    Main,
    Overlay
  }
};
</script>
