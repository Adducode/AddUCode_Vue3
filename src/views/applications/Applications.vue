<template>
    <layout>
        <div>
            Applications
        </div>
        <router-link to="app1">App1</router-link>
    </layout>
</template>

<script>
import Layout from '@/components/layout/Layout'

export default {
    name: "Applications",
    components: {
        Layout
    }
}
</script>

<style scoped>

</style>