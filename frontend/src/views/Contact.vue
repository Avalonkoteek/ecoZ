<template>
  <div class="contact">
    <Header v-bind:content="content"/>
  </div>
</template>

<script>
import Header from "../components/Header/Header";

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
    Header
  }
};
</script>
