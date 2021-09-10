<template>
    <layout>
        <div class="projects">
            <h1 class="projects__title">Commercial projects</h1>
            <h2 class="projects__subtitle">Here are the commercial projects in which I was actively involved in creating or maintaining a particular project.<br>Check links:</h2>
            <div class="projects__wrapper">
                <a href="https://www.artdancebaby.com/" target="_blank" class="projects__link">Art Dance Baby</a>
                <a href="https://www.ccpress.pl/" target="_blank" class="projects__link">CCPress</a>
                <a href="https://www.spillard.com/solution/spillard-live/" target="_blank" class="projects__link">Spillard - live vehicle tracking (something like uber)</a>
                <a href="https://www.visiontrack.com/products/" target="_blank" class="projects__link">VisionTrack</a>
                <a href="https://www.msecmarketing.com/" target="_blank" class="projects__link">MSEC marketing</a>
                <a href="https://airmaxremote.com/savings-calculator/" target="_blank" class="projects__link">Air max remote</a>
                <a href="https://fleetscompareus.com/" target="_blank" class="projects__link">Fleets compare</a>
                <a href="https://zalap.pl/" target="_blank" class="projects__link">Załap</a>
                <a href="https://c-m-s.tech/" target="_blank" class="projects__link">C-M-S tech</a>
                <div class="projects__link projects__link--not-link">Newsletters on email for every devices and every browsers and all software</div>
            </div>
        </div>
    </layout>
</template>

<script>
import Layout from '@/components/layout/Layout'

export default {
    name: "Projects",
    components: {
        Layout
    }
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/app.scss';

.projects {
    display: flex;
    flex-direction: column;
    background-color: $gold-color-500;
    background-image: linear-gradient(315deg, $gold-color-500 0%, $black-color-900 15%);
    padding: 20px 10px;
    color: $gold-color-400;

    @include media-breakpoint-up(md) {
        padding: 40px 10px;
    }

    @include media-breakpoint-up(lg) {
        padding: 60px 10px;
    }

    &__title {
        text-align: center;
        font-size: 40px;
    }

    &__subtitle {
        text-align: center;
        font-size: 24px;
        margin: 20px 0;
        line-height: 1.5;

        @include media-breakpoint-up(sm) {
            width: 80%;
            margin: 20px auto;
        }

        @include media-breakpoint-up(lg) {
            width: 60%;
            line-height: 1.7;
        }
    }

    &__wrapper {
        display: flex;
        flex-direction: column;
        width: 200px;
        margin: 0 auto 30px;

        @include media-breakpoint-up(sm) {
            width: 80%;
        }

        @include media-breakpoint-up(lg) {
            width: 60%;
        }

        @include media-breakpoint-up(lg) {
            width: 50%;
        }
    }

    &__link {
        color: $gold-color-400;
        text-decoration: none;
        margin-top: 10px;
        position: relative;
        padding: 0 5px;
        transition: opacity 0.3s, box-shadow 0.3s;

        @include media-breakpoint-up(md) {
            margin-top: 20px;
        }

        &:hover {
            opacity: 0.5;
            color: $gold-color-400;
            box-shadow: -40px 0 60px $white-color-100;
            border-radius: 8px;
        }

        &:before {
            content: "Click";
            position: absolute;
            right: -40px;
            top: 0;
            color: $gold-color-400;
        }

        &:after {
            content: url("../assets/icons/left-arrow.svg");
            width: 12px;
            height: 12px;
            position: absolute;
            right: 0;
            top: 3px;
        }

        &--not-link {
            transition: none;

            &:before, &:after {
                content: none;
            }

            &:hover {
                opacity: 1;
                box-shadow: none;
            }
        }
    }
}

</style>