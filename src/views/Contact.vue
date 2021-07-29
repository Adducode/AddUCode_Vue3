<template>
    <layout>
        <div>
            Contact
        </div>
    </layout>
</template>

<script>
import Layout from '@/components/layout/Layout'

export default {
    name: "Contact",
    components: {
        Layout
    }
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/app.scss';
div {
    @include media-breakpoint-up(md) {
        color: red;
    }

    @include media-breakpoint-up(xxl) {
        color: green;
    }
}
</style>