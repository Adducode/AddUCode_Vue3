<template>
    <div id="header" class="header">
        <add-button :to="{ name: 'Home' }" title="AddUCode" gold-btn class="header__logo"></add-button>
        <div class="header__mobile-menu-wrapper" @click="toggleMenu" :class="{ 'active-bar-icon': getIsMenuActive }">
            <div class="header__mobile-menu"></div>
        </div>
        <div class="header__links" :class="{ 'active': getIsMenuActive }">
            <div :class="['active-exit', { 'active-close': getIsMenuActive }]">
                <add-button :to="{ name: 'Home' }" title="AddUCode" gold-btn class="header__logo" @click="closeMenu"></add-button>
                <div
                    class="header__close-menu"
                    @click="toggleMenu"
                >
                    <img src="../../../assets/icons/close.svg" alt="close menu icon">
                </div>
            </div>
            <div class="header__links-wrapper">
                <add-button :to="{ name: 'Applications' }" title="Apps" gold-btn @click="closeMenu"></add-button>
                <add-button :to="{ name: 'Projects' }" title="Projects" gold-btn @click="closeMenu"></add-button>
                <add-button :to="{ name: 'About' }" title="About me / CV" gold-btn @click="closeMenu"></add-button>
                <add-button :to="{ name: 'Contact' }" title="Contact" gold-btn @click="closeMenu"></add-button>
                <add-button :to="{ name: 'Options' }" title="Options" gold-btn @click="closeMenu"></add-button>
            </div>
            <div class="header__social-wrapper">
                <a href="https://github.com/Adducode/AddUCode" @click="closeMenu" target="_blank" class="header__social-github">
                    <img src="../../../assets/icons/github.svg" alt="github icon" class="header__social-icon">
                </a>
                <a href="" @click="closeMenu" target="_blank" class="header__social-facebook">
                    <img src="../../../assets/icons/facebook.svg" alt="facebook icon" class="header__social-icon">
                </a>
                <a href="" @click="closeMenu" target="_blank" class="header__social-instagram">
                    <img src="../../../assets/icons/instagram.svg" alt="instagram icon" class="header__social-icon">
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import Button from '@/components/atoms/Button'
import { mapGetters, mapActions} from 'vuex'

export default {
    name: "Header",
    components: {
        'add-button': Button,
    },
    computed: {
        ...mapGetters([
            'getIsMenuActive',
        ])
    },
    methods: {
        ...mapActions([
            'setIsMenuActive',
        ]),
        toggleMenu() {
            this.setIsMenuActive(!this.getIsMenuActive);
        },
        closeMenu() {
            this.setIsMenuActive(false);
        },
    }
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/app.scss';

.header {
    font-size: 18px;
    font-family: $font-fredricka;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 10px;
    background-color: $gold-color-500;
    background-image: linear-gradient(315deg, $gold-color-500 0%, $black-color-900 74%);

    @include media-breakpoint-up(md) {
        padding: 0 10px;
    }

    @include media-breakpoint-up(lg) {
        padding: 0 30px;
    }

    @include media-breakpoint-up(xl) {
        padding: 0 40px;
    }

    &__logo {
        font-family: $font-wind-song;
        font-size: 20px;

        @include media-breakpoint-up(md) {
            font-size: 26px;
        }

        @include media-breakpoint-up(lg) {
            font-size: 30px;
        }
    }

    &__mobile-menu-wrapper {
        padding: 12px 5px;
        width: 45px;
        cursor: pointer;
        animation: rotate 0.5s;
        transition: opacity 0.3s;

        &:hover {
            opacity: 0.5;
        }
    }

    &__mobile-menu {
        height: 5px;
        width: 30px;
        border-radius: 3px;
        background-color: $black-color-900;
        background-image: linear-gradient(315deg, $black-color-900 30%, $gold-color-500 100%);
        position: relative;

        @include media-breakpoint-up(md) {
            display: none;
        }

        &:before {
            content: '';
            position: absolute;
            top: 8px;
            height: inherit;
            width: inherit;
            border-radius: inherit;
            background-color: inherit;
            background-image: inherit;
        }

        &:after {
            content: '';
            position: absolute;
            top: -8px;
            height: inherit;
            width: inherit;
            border-radius: inherit;
            background-color: inherit;
            background-image: inherit;
        }
    }

    &__links {
        display: none;

        @include media-breakpoint-up(md) {
            display: flex;
        }
    }

    &__links-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;

        @include media-breakpoint-up(md) {
            flex-direction: row;
        }

        a:nth-child(n+1) {
            padding: 20px 0;

            @include media-breakpoint-up(md) {
                margin: 0 11px 0 0;
                padding: 39px 5px;
                position: relative;
            }

            @include media-breakpoint-up(lg) {
                font-size: 20px;
                margin: 0 33px 0 0;
            }

            @include media-breakpoint-up(xl) {
                margin: 0 55px 0 0;
            }

            @include media-breakpoint-up(xxl) {
                margin: 0 100px 0 0;
            }

            &:hover:before {
                content: '';
                position: absolute;
                width: 50px;
                left: 20px;
                margin-top: 13px;
                height: 2px;
                background-color: $gold-color-400;

                @include media-breakpoint-up(sm) {
                    width: 100px;
                }

                @include media-breakpoint-up(md) {
                    display: none;
                }
            }

            &:hover:after {
                content: '';
                position: absolute;
                width: 50px;
                right: 20px;
                margin-top: 13px;
                height: 2px;
                background-color: $gold-color-400;

                @include media-breakpoint-up(sm) {
                    width: 100px;
                }

                @include media-breakpoint-up(md) {
                    display: none;
                }
            }
        }

        a:first-child {
            margin-top: 30px;

            @include media-breakpoint-up(md) {
                margin-top: 0;
            }
        }

        a:last-child {
            margin-bottom: 5px;

            @include media-breakpoint-up(md) {
                margin-bottom: 0;
            }
        }
    }

    .active {
        display: flex;
        flex-direction: column;
        box-shadow: 0 0 15px $white-color-100;
        position: absolute;
        z-index: 999;
        top: 5px;
        left: 50%;
        transform: translateX(-50%);
        width: 97%;
        padding: 15px 10px;
        border-radius: 15px;
        background-color: $gold-color-500;
        background-image: linear-gradient(315deg, $gold-color-500 0%, $black-color-900 74%);
    }

    .active-exit {
        @include media-breakpoint-up(md) {
            display: none;
        }

        .header__logo {
            width: 90%;
            display: flex;
            justify-content: center;

            @include media-breakpoint-up(sm) {
                width: 95%;
            }
        }
    }

    .active-close {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .active-bar-icon {
        display: none;
    }

    &__close-menu {
        color: $gold-color-400;
        width: 16px;
        height: 32px;
        cursor: pointer;
        transition: opacity 0.3s;
        animation: rotate 0.5s;

        &:hover {
            opacity: 0.5;
        }
    }

    &__social-wrapper {
        display: flex;
        justify-content: center;
        margin: 10px 0;
        min-height: 25px;

        @include media-breakpoint-up(md) {
            margin: 37px 0;
        }

        @include media-breakpoint-up(lg) {
            margin: 39px 0;
        }

        a:nth-child(1) {
            margin-right: 20px;

            @include media-breakpoint-up(md) {
                margin-right: 10px;
            }

            @include media-breakpoint-up(lg) {
                margin-right: 15px;
            }

            @include media-breakpoint-up(xxl) {
                margin-right: 20px;
            }
        }

        a:nth-child(3) {
            margin-left: 20px;

            @include media-breakpoint-up(md) {
                margin-left: 10px;
            }

            @include media-breakpoint-up(lg) {
                margin-left: 15px;
            }

            @include media-breakpoint-up(xxl) {
                margin-left: 20px;
            }
        }
    }

    &__social-github {
        width: 20px;
        height: 20px;
        transition: background-image 0.1s;

        &:hover {
            background-image: url("../../../assets/icons/github-color.svg");
            background-repeat: no-repeat;
            display: flex;
            align-items: baseline;
            margin-top: 5px;
        }
    }

    &__social-facebook {
        width: 20px;
        height: 20px;
        transition: background-image 0.1s;

        &:hover {
            background-image: url("../../../assets/icons/facebook-color.svg");
            background-repeat: no-repeat;
            display: flex;
            align-items: baseline;
            margin-top: 5px;
        }
    }

    &__social-instagram {
        width: 20px;
        height: 20px;
        transition: background-image 0.1s;

        &:hover {
            width: 20px;
            height: 20px;
            background-image: url("../../../assets/icons/instagram-color.png");
            background-repeat: no-repeat;
            background-size: 20px;
            display: flex;
            align-items: baseline;
            margin-top: 4px;
        }
    }

    &__social-icon {
        transition: opacity 0.3s;

        &:hover {
            opacity: 0;
        }
    }
}

@keyframes rotate {
    from {
        transform: rotateZ(0);
    }

    to {
        transform: rotateZ(360deg);
    }
}
</style>