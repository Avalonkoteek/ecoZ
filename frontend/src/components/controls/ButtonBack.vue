<template>
    <div class="button-back">
        <router-link class="link link--button-back" :to="to" >
            <v-svg name="arrow_back" width="40" height="24" />
            <span class="link__buttom-line">назад</span>
        </router-link>
    </div>
</template>

<script>

import VSvg from './VSvg'

export default {
    components: {
        VSvg,
    },

    props: {
        to: {
            type: [String, Object],
            default: ''
        }
    }
}
</script>
