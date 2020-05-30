<template>
  <svg
    class="background__overlay"
    ref="overlay"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 900"
    preserveAspectRatio="none"
  >
    <path
      id="BG"
      ref="overlayPath"
      d="M0,0h1441.727v125.506s-831.476-58.914-848.645,78.438,115.032,224.91,144.219,381.146-19.609,314.93-19.609,314.93h-717.427Z"
      fill="#fffaeb"
      stroke="#707070"
      stroke-width="0"
    />
    <!-- <path
      id="BG"
      d="M238.777-1.668c-39.968,3.962,25.133,312.1-37.9,321.036-27.667,0-64.126-.1-102.217,0-49.714.134-101.432,0-101.432,0S-2.779,158.18-2.772.151C-2.772.151,257.206-3.5,238.777-1.668Z"
      transform="translate(2.681 240.217) rotate(-90)"
      fill="#fffaeb"
      stroke="#fff"
      stroke-width="1"
    />-->
  </svg>
</template>
<script>
import { overlayAnimation } from "./overlay-animation";
export default {
  props: ["value"],
  name: "overlay",
  watch: {
    value: function(newVal) {
      console.log(newVal);
      const { overlayPath } = this.$refs;
      if (newVal) {
        overlayAnimation.overlayAnimationStart(overlayPath);
        this.overlayIsActive = true;
      } else {
        overlayAnimation.overlayAnimationEnd(overlayPath);
        this.overlayIsActive = false;
      }
    }
  }
};
</script>