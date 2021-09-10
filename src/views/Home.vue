<template>
    <layout>
        <div class="home">
            <h1 class="home__title">Welcome in AddUCode page</h1>
            <home-window-link
                title="Apps"
                description="Here you can find, my simple and more advance applications, project or some useful cases"
                apps-img
                :to="{ name: 'Applications'}"
            >
            </home-window-link>
            <home-window-link
                title="Projects"
                description="In this subpage you can see my commercial works and project which I worked on or commercial projects what I made"
                projects-img
                reverse
                :to="{ name: 'Projects'}"
            ></home-window-link>
            <home-window-link
                title="About me"
                description="This subpage is about myself and here you can look on my CV and download it if you want"
                about-img
                :to="{ name: 'About'}"
            >
            </home-window-link>
            <home-window-link
                title="Contact"
                description="Here are my contact information if you want to work with me"
                contact-img
                reverse
                :to="{ name: 'Contact'}"
            ></home-window-link>
            <home-window-link
                title="Options"
                description="Some options to change website display, colors etc."
                options-img
                :to="{ name: 'Options'}"
            >
            </home-window-link>
        </div>
    </layout>
</template>

<script>
import Layout from '@/components/layout/Layout'
import HomeWindowLink from '@/components/molecule/HomeWindowLink'

export default {
    name: 'Home',
    components: {
        Layout,
        HomeWindowLink
    }
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/app.scss';

.home {
    font-family: $font-fredricka;
    background-color: $gold-color-500;
    background-image: linear-gradient(315deg, $gold-color-500 0%, $black-color-900 15%);
    padding: 20px 10px;
    display: flex;
    flex-direction: column;

    &__title {
        color: $gold-color-400;
        text-align: center;
        margin: 10px 0 30px;

        @include media-breakpoint-up(lg) {
            margin: 30px 0 60px;
        }
    }
}
</style>