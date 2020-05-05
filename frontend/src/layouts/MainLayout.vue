<template>
     <Header />
</template>
<script>
import Header from "../components/Header/Header";

export default {
  data: () => ({
    isOpen: true
  }),
  name: "main-layout",
  components: {
    Header,
  }
};
</script>
