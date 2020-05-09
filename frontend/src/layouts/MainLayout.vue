<template>
  <div class="mainLayout">
    <Navbar />
<Background />
    <Footer />
  </div>
</template>
<style scoped>

</style>
<script>
import Navbar from "../components/Navbar/Navbar";
import Background from "../components/Background/Background";
import Footer from "../components/Footer/Footer";

export default {
  data: () => ({
    isMobile: true
  }),

  methods: {
    updateWidth() {
      this.isMobile = window.innerWidth > 786;
      console.log(this.$route)
    }
  },
  created() {
    window.addEventListener("resize", this.updateWidth);
    this.updateWidth();
  },

  name: "main-layout",
  components: {
    Navbar,
    Footer,
    Background
   
  }
};
</script>
