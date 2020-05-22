<template>
    <svg class="icon" :class="modifier">
        <use v-bind="{ 'xlink:href': `#icon-${name}` }" />
    </svg>
</template>

<script>

export default {
    name: 'v-svg',
    props: {
        name: { type: String, default: null },
        modifier: { type: String, default: null },
    },
    serverCacheKey: props => (props.modifier ? `${props.name}-${props.modifier}` : props.name),
};
</script>
