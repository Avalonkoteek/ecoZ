<template>
  <a class="burger" :class="{open:value}" @click.prevent="$emit('click')">
    <span class="line1"></span>
    <span class="line2"></span>
    <span class="line3"></span>
  </a>
</template>
<script>
export default {
  props: ["value"]
};
</script>
<style scoped>
.burger {
  width: 16px;
  height: 14px;
  position: relative;
  cursor: pointer;
  transition: 0.5s ease-in-out;
  transform: rotate(0deg);
  z-index: 1000;
}
.burger span {
  position: absolute;
  height: 2px;
  width: 16px;
  border-radius: 1px;
  background-color: #bcbcc4;
  left: 0;
  opacity: 1;
  transition: 0.25s ease-in-out;
  transform: rotate(0deg);
}

.line1 {
  top: 0px;
  transform-origin: left center;
}
.line2 {
  top: 6px;
  max-width: 10px;
  transform-origin: left center;
}
.line3 {
  top: 12px;
  transform-origin: left center;
}

.burger.open .line1 {
  transform: rotate(45deg);
}

.burger.open .line2 {
  width: 0%;
  opacity: 0;
}

.burger.open .line3 {
  transform: rotate(-45deg);
  top: 11px;
}
</style>