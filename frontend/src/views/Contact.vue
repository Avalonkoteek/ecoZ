<template>
  <div class="contact">
    <Main v-bind:content="content"/>
  </div>
</template>

<script>
import Main from "../components/Main/Main";

export default {
  data: () => ({
    content:{
    title: "Свяжитесь с нами удобным для вас способом",
    description: "",
    links: [


    ]
    }
  }),
  name: "contact",
  components: {
    Main
  }
};
</script>
