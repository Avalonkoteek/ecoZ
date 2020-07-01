<template>
  <div class="school">
    <Main v-bind:content="getEducation" />
  </div>
</template>

<script>
import Main from "../components/Main/Main";

import { mapGetters } from "vuex";

export default {
  name: "school",
  components: {
    Main
  },
  data: () => ({
    content: {
      title: "Для школ и других образовательных учреждений",
      description:
        "60% активного времени учащиеся проводят в образовательном учреждении и вовлечены в учебный процесс. Поэтому именно в школах и колледжах должна появляться инфраструктура для воспитания экологической грамотности: от раздельного сбора до экологических привычках на всю жизнь. Если вы: педагог, родитель или представитель администрации образовательного учреждения; заполните заявку и мы свяжемся с вами для обсуждения деталей сотрудничества.",
      links: []
    }
  }),
  computed: {
    ...mapGetters(['getEducation'])
  }
};
</script>
