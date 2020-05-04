<template>
     <Navbar />
</template>
<script>
import Navbar from "../components/Navbar/Navbar";

export default {
  data: () => ({
    isOpen: true
  }),
  name: "main-layout",
  components: {
    Navbar,
  }
};
</script>