<template>
  <div>
    <svg
      width="334"
      height="43"
      viewBox="0 0 334 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="overlay-mobile"
      preserveAspectRatio="none"
    >
      <g id="Frame 4" clip-path="url(#clip0)">
        <path
          id="BG"
          d="M0 1.99985C0.301676 42.0601 333.5 -18.5 333.5 42.5C333.5 69.0003 340.384 106.469 340.487 144.56C340.621 194.274 332.664 243.549 332.664 243.549L0 243.549L0 1.99985Z"
          fill="#FFFAEB"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="334" height="43" fill="white" />
        </clipPath>
      </defs>
    </svg>

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
  </div>
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
  },
  data: () => ({
    isMobile: false
  }),
  // check mobile width
  methods: {
    updateWidth() {
      this.isMobile = window.innerWidth > 1023;
    }
  },
  created() {
    window.addEventListener("resize", this.updateWidth);
    this.updateWidth();
  }
};
</script>