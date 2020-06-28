<template>
    <div name="v-popup">
        <div class="v-popup-mask" @click="clickOutSide($event)">
            <div class="v-popup-wrapper">
            <div class="v-popup-container">

                <div class="v-popup-header">
                    <slot name="header">
                    </slot>
                </div>

                <div class="v-popup-body">
                    <slot name="body">
                    </slot>
                </div>

                <div class="v-popup-footer">
                    <slot name="footer">
                    </slot>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'v-popup',
    methods: {
        clickOutSide(e) {
            if (e.target.className === 'v-popup-wrapper');
            this.$emit('close')
        }
    }
}
</script>
