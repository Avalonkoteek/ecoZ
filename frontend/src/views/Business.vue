<template>
  <div class="business">
    <Main v-bind:content="getBusiness" />
  </div>
</template>

<script>
import Main from "../components/Main/Main";
import { mapGetters } from "vuex";

export default {
  name: "business",
  metaInfo() {
    return {
      title: this.$title("Бизнесу"),
    };
  },
  components: {
    Main,
  },
  data: () => ({
    content: {
      title: "Приглашаем предприятия к сотрудничеству ",
      description:
        "Обращаясь к нам за платными услугами, вы помогаете работать нашей некоммерческой организации и выполнять поставленные нами цели и задачи",
      links: [{ name: "Услуги", to: "/business/services" }],
    },
  }),
  computed: {
    ...mapGetters(["getBusiness"]),
  },
};
</script>
