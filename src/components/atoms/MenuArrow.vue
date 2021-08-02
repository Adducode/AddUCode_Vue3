<template>
    <div class="thunder">
        <div class="thunder__core">
            <div class="thunder__first-bolt"></div>
            <div class="thunder__second-bolt"></div>
            <div class="thunder__third-bolt"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "MenuArrow"
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/app.scss';

.thunder {
    transition: background-color 0.3s;

    &__core {
        position: relative;
        width: 1px;
        margin: 0 auto;
        top: -58px;
        left: -14px;
    }

    &__first-bolt {
        position: absolute;
        width: 2px;
        height: 60px;
        transform: rotateZ(-35deg);
        background-color: transparent;
    }

    &__second-bolt {
        position: absolute;
        width: 33px;
        height: 2px;
        top: 47px;
        left: -13px;
        transform: rotateZ(25deg);
        background-color: transparent;
    }

    &__third-bolt {
        position: absolute;
        width: 2px;
        height: 82px;
        top: 34px;
        left: 12px;
        transform: rotateZ(-35deg);
        background-color: transparent;
    }
}

</style>