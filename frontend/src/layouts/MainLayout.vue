<template>
  <Navbar v-if="isMobile" />
  <NavbarMobile v-else />
</template>
<script>
import Navbar from "../components/Navbar/Navbar";
import NavbarMobile from "../components/Navbar/NavbarMobile";
     


export default {
    data: () => ({
    isMobile: false,
  
  }),
  name: "main-layout",
  components: {
    Navbar,
    NavbarMobile
  
  }
};
</script>
