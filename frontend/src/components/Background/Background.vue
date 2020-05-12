<template>
  <div>
    <svg>
      <use xlink:href="../../assets/img/MAIN__BG/bg.svg#Illustration_Reserve_1" />
    </svg>
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
  transition: all 1s ease;
}
svg g{
   all: inherit; 
}
use #Illustration_Reserve_1 {
    all: inherit;
  opacity: 0;
}
use #Back_Trees {
all: inherit;
  opacity: 0;
}
svg {
  height: 100%;
  min-width: 100%;
  width: auto;
  top: 0;
  animation: transf 5s ease;
}

@keyframes transf {
  0% {
    transform: translateX(40%) scale(1);
  }
  100% {
    transform: translateX(0%) scale(1.1);
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
  methods: {
    updateWidth() {
      this.isMobile = window.innerWidth > 786;
      console.log(this.$route);
    }
  },
   created() {
     console.log($router)
   }
};
</script>