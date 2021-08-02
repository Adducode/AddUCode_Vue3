<template>
    <component
        :is="type"
        :to="to"
        class="add-btn"
        :class="[{
            'add-btn--link': to,
            'add-btn--yellow': goldBtn,
        }]"
    >{{ title }}
    </component>
</template>

<script>
export default {
    name: "Button",
    props: {
        to: {
            type: String,
            required: false,
        },
        title: {
            type: String
        },
        goldBtn: {
            type: Boolean
        }
    },
    computed: {
        type() {
            if (this.to) {
                return 'router-link';
            }
            return 'v-btn';
        }
    }
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/app.scss';

.add-btn {
    cursor: pointer;
    transition: opacity 0.3s;
    color: $black-color-900;

    &:hover {
        opacity: 0.5;
    }

    &--link {
        text-decoration: none;
    }

    &--yellow {
        color: $gold-color-400;

        &:hover {
            color: $gold-color-400;
        }
    }
}

</style>