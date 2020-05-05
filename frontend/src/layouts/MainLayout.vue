<template>
  <NavbarMobile />
</template>
<script>
// import Navbar from "../components/Navbar/Navbar";
import NavbarMobile from "../components/Navbar/NavbarMobile";

export default {
    data: () => ({
    isMobile: true,
  
  }),
  name: "main-layout",
  components: {
    // Navbar,
    NavbarMobile
  }
};
</script>