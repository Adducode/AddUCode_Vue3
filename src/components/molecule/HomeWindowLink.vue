<template>
    <div class="home-window-link" :class="{ 'reverse-wrapper': reverse }">
        <div class="home-window-link__img-wrapper">
            <div
                class="home-window-link__img"
                :class="{
                'home-window-link__img--apps': appsImg,
                'home-window-link__img--projects': projectsImg,
                'home-window-link__img--about': aboutImg,
                'home-window-link__img--contact': contactImg,
                'home-window-link__img--options': optionsImg,
            }"></div>
        </div>
        <div class="home-window-link__right-wrapper">
            <add-button class="home-window-link__btn" :to="to" :title="title"></add-button>
            <p class="home-window-link__description">{{ description }}</p>
        </div>
    </div>
</template>

<script>
import Button from '@/components/atoms/Button'

export default {
    name: "HomeWindowLink",
    components: {
        'add-button': Button
    },
    props: {
        title: String,
        description: String,
        reverse: Boolean,
        appsImg: Boolean,
        projectsImg: Boolean,
        aboutImg: Boolean,
        contactImg: Boolean,
        optionsImg: Boolean,
        to: String
    }
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/app.scss';

.home-window-link {
    font-size: $font-fredricka;
    padding: 10px;
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;

    @include media-breakpoint-up(md) {
        flex-direction: row;
    }

    &__img-wrapper {
        width: 100%;
        height: 500px;
        border-radius: 20px;
        box-shadow: 0 0 35px $white-color-100;

        @include media-breakpoint-up(sm) {
            width: 80%;
            margin: 0 auto;
        }

        @include media-breakpoint-up(md) {
            width: 50%;
        }

        @include media-breakpoint-up(lg) {
            width: 45%;
        }

        @include media-breakpoint-up(xl) {
            width: 40%;
        }

        @include media-breakpoint-up(xxl) {
            width: 35%;
        }
    }

    &__img {
        background-attachment: fixed;
        background-size: cover;
        background-repeat: no-repeat;
        border-radius: 20px;
        height: 100%;
        width: 100%;

        @include media-breakpoint-up(md) {
            background-size: contain;
            background-repeat: repeat;
        }

        &--apps {
            background-image: url("https://i.picsum.photos/id/1004/800/800.jpg?hmac=Ge8KzsNEk8Z8JEbJcR1cPfOLh-WInY6zLQ8IGqKcTPs");
        }

        &--projects{
            background-image: url("https://i.picsum.photos/id/1056/800/800.jpg?hmac=D2H3C6B-aHc3PpF9XjBAW70crZjmnrt2uaB817nb-BA");
        }

        &--about {
            background-image: url("https://i.picsum.photos/id/1019/800/800.jpg?hmac=sVtfJzBornA6hSh5Owmt8eCyjERXaah1l6krmwuOTK4");
        }

        &--contact {
            background-image: url("https://i.picsum.photos/id/1038/800/800.jpg?hmac=gmYnvlQhCRk85wgjVxxysDk4FLt9lYPai4fv-HK0Djs");
        }

        &--options {
            background-image: url("https://i.picsum.photos/id/1041/800/800.jpg?hmac=AWJbBGp8gLlc__FITLvyhTFxpaAwM5tziHtkedXBLlk");
        }
    }

    &__right-wrapper {
        display: flex;
        flex-direction: column;

        @include media-breakpoint-up(md) {
            width: 50%;
        }

        @include media-breakpoint-up(lg) {
            width: 45%;
            margin: 0 auto;
        }

        @include media-breakpoint-up(xl) {
            width: 40%;
        }

        @include media-breakpoint-up(xxl) {
            width: 35%;
        }
    }

    &__btn {
        color: $gold-color-400;
        background-color: $black-color-800;
        position: relative;
        width: 35%;
        padding: 10px;
        box-shadow: 0 0 80px $white-color-100;
        margin: 25px auto 10px;
        border-radius: 5px;
        text-align: center;
        transition: background-color 0.8s, width 0.8s ease-in-out, color 0.8s;

        @include media-breakpoint-up(sm) {
            width: 20%;
        }

        @include media-breakpoint-up(md) {
            width: 25%;
            margin: 0 0 0 auto;
            height: max-content;
        }

        @include media-breakpoint-up(lg) {
            width: 24%;
        }

        @include media-breakpoint-up(xl) {
            width: 20%;
        }

        @include media-breakpoint-up(xxl) {
            width: 19%;
        }

        &:hover {
            opacity: 1;
            background-color: $white-color-100;
            width: 98%;
            color: $black-color-900;

            @include media-breakpoint-up(sm) {
                width: 80%;
            }

            @include media-breakpoint-up(md) {
                width: 92%;
            }

            @include media-breakpoint-up(lg) {
                width: 94%;
            }

            @include media-breakpoint-up(xl) {
                width: 95%;
            }

            @include media-breakpoint-up(xxl) {
                width: 97%;
            }

            &:before {
                display: none;
            }

            &:after {
                display: none;
            }
        }

        &:before {
            content: url("../../assets/icons/right-arrow.svg");
            width: 12px;
            height: 12px;
            position: absolute;
            left: -20px;
            top: 13px;
            color: $gold-color-400;
        }

        &:after {
            content: url("../../assets/icons/left-arrow.svg");
            width: 12px;
            height: 12px;
            position: absolute;
            right: -20px;
            top: 13px;
            color: $gold-color-400;

            @include media-breakpoint-up(md) {
                display: none;
            }
        }
    }

    &__description {
        color: $gold-color-400;

        @include media-breakpoint-only(sm) {
            width: 80%;
            margin: 0 auto;
        }

        @include media-breakpoint-up(md) {
            padding-left: 30px;
            margin-top: 20px;
        }
    }
}

.reverse-wrapper {
    @include media-breakpoint-up(md) {
        flex-direction: row-reverse;
    }

    .home-window-link {
        &__btn {
            @include media-breakpoint-up(md) {
                margin: 0 auto 0 0;
            }

            &:hover {
                &:after {
                    display: none;
                }
            }

            &:after {
                @include media-breakpoint-up(md) {
                    display: block;
                }
            }

            &:before {
                @include media-breakpoint-up(md) {
                    display: none;
                }
            }
        }

        &__description {
            @include media-breakpoint-up(md) {
                padding-left: 0;
                padding-right: 30px;
            }
        }
    }
}

</style>