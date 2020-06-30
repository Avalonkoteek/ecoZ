<template>
  <div class="business">
    <Main v-bind:content="content" />
  </div>
</template>

<script>
import Main from "../components/Main/Main";

export default {
  data: () => ({
    content: {
      title: "Приглашаем предприятия к сотрудничеству ",
      description:
        "Обращаясь к нам за платными услугами, вы помогаете работать нашей некоммерческой организации и выполнять поставленные нами цели и задачи",
      links: [{ name: "Услуги", to: "/business/services" }]
    }
  }),
  async mounted() {
    const pages = await this.$store.state.mainPage.allPages;
    console.log(this.$route);
    console.log(pages);
  },
  name: "business",
  components: {
    Main
  }
};
</script>
