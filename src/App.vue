<template>
    <router-view></router-view>
    <router-view name="application"></router-view>
</template>

<script>
export default {
    name: "App"
}
</script>

<style lang="scss">
@import '@/assets/scss/app.scss';
</style>
