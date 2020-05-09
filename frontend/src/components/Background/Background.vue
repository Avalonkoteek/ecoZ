<template>
<div class="first_bg" v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>

</template>
<style scoped>
div{
    position: absolute;
    top:0;
    left:0;
    z-index: -1;
    height: 100%;
    width: 100%;
    background: url('../../assets/img/MAIN__BG/bg.svg') no-repeat;
    background-position:-23% center ;
    transition: all 1s ease;
}
</style>
<script>
export default {
    name:"background",
    props:['position'],
      methods: {
    updateWidth() {
      this.isMobile = window.innerWidth > 786;
      console.log(this.$route)
    }
      }
}
</script>