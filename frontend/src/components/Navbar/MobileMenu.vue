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
