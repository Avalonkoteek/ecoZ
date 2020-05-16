<template>
<!-- Это временно -->
  <div ref="bg">

  </div>
</template>
<style scoped>
div {
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  z-index: -1;
  height: 100%;
  width: 100%;
  --position:-0%;
  transition: all 1s ease;
  background: url("../../assets/img/MAIN__BG/bg.svg") no-repeat;
  background-position:var(--position) 0%;
 background-size: cover;
 transition: background-position 2s ease-out;
 animation: bg 2s ease ;
}
img{
  height: 100%;
  width: auto;
}
svg g {
  all: inherit;
}

svg {
  height: 100%;
  min-width: 100%;
  width: auto;
  top: 0;
 
}

@keyframes bg {
  0% {
   background-position:-23% 0%;
  }
  100% {
     background-position:0% 0%;
  }
}
@keyframes scale {
  0% {
    transform: translateX(40%) scale(1);
  }
  100% {
    transform: translateX(0%) scale(1.1);
  }
}
</style>
<script>
export default {
  name: "background",
  props: ["position"],
  // mounted() {
  //   if(this.$route.name == "about"){
  //      t
  //   }
// console.log(this.$refs.bg);
// console.log(this.$route)

  
};
</script>