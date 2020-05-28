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
  </svg>
</template>
<script>
import { overlayAnimation } from "./overlay-animation";
export default {
  props: ["value"],
  name: "overlay",
  watch: {
    value: function(newVal, oldVal) {
      const { overlayPath } = this.$refs;
      if (newVal === true) {
        overlayAnimation.overlayAnimationStart(overlayPath);
        this.overlayIsActive = true;
      }
      if (oldVal === "empty-layout" && newVal !== "empty-layout") {
        overlayAnimation.overlayAnimationEnd(overlayPath);
        this.overlayIsActive = false;
      }
    }
  }
};
</script>