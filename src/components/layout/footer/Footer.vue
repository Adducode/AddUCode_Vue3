<template>
    <div id="footer" class="footer">
        <div class="footer__wrapper">
            <add-button :to="{ name: 'Home' }" title="AddUCode" gold-btn class="footer__logo"></add-button>
            <div class="footer__social-wrapper">
                <a href="https://github.com/Adducode/AddUCode" target="_blank" class="footer__social-github">
                    <img src="../../../assets/icons/github.svg" alt="github icon" class="footer__social-icon">
                </a>
                <a href="" target="_blank" class="footer__social-facebook">
                    <img src="../../../assets/icons/facebook.svg" alt="facebook icon" class="footer__social-icon">
                </a>
                <a href="" target="_blank" class="footer__social-instagram">
                    <img src="../../../assets/icons/instagram.svg" alt="instagram icon" class="footer__social-icon">
                </a>
            </div>
            <div class="footer__column-wrapper">
                <div class="footer__first-column">
                    <add-button :to="{ name: 'Applications' }" title="Apps" gold-btn></add-button>
                    <add-button :to="{ name: 'Projects' }" title="Projects" gold-btn></add-button>
                    <add-button :to="{ name: 'About' }" title="About me / CV" gold-btn></add-button>
                </div>
                <div class="footer__second-column">
                    <add-button :to="{ name: 'Contact' }" title="Contact" gold-btn></add-button>
                    <add-button :to="{ name: 'Options' }" title="Options" gold-btn></add-button>
                </div>
            </div>
            <div class="footer__contact-wrapper">
                <a href="tel:+48792320103" class="footer__contact-phone">
                    <img src="../../../assets/icons/phone.svg" alt="phone" class="footer__social-icon footer__social-icon--width"> 792 320 103
                </a>
                <a href="mailto:mateusz.kraska.95@gmail.com?subject=AdduEmail:" class="footer__contact-email">
                    <img src="../../../assets/icons/email.svg" alt="email" class="footer__social-icon footer__social-icon--width"> mateusz.kraska.95@gmail.com
                </a>
            </div>
        </div>
        <div class="footer__copyright">Created by Mateusz Kraska</div>
    </div>
</template>

<script>
import Button from '@/components/atoms/Button'

export default {
    name: "Footer",
    components: {
        'add-button': Button
    }
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/app.scss';

.footer {
    font-size: 18px;
    font-family: $font-fredricka;
    padding: 30px 10px 20px;
    background-color: $gold-color-500;
    background-image: linear-gradient(315deg, $black-color-900 0%, $gold-color-500 74%);

    @include media-breakpoint-up(md) {
        padding: 50px 10px 30px;
    }

    @include media-breakpoint-up(lg) {
        padding: 50px 30px 30px;
    }

    @include media-breakpoint-up(xl) {
        padding: 70px 30px 50px;
    }

    &__wrapper {
        @include media-breakpoint-up(md) {
            display: flex;
            justify-content: center;
            align-items: flex-start;
        }
    }

    &__logo {
        font-family: $font-wind-song;
        font-size: 20px;
        display: flex;
        justify-content: center;

        @include media-breakpoint-up(md) {
            font-size: 26px;
            margin-top: 30px;
        }

        @include media-breakpoint-up(lg) {
            font-size: 30px;
        }

        @include media-breakpoint-up(xl) {
            margin: 30px 150px 0 auto;
        }

        @include media-breakpoint-up(xxl) {
            margin: 30px 200px 0 auto;
        }
    }

    &__social-wrapper {
        display: flex;
        justify-content: center;
        margin: 20px 0;
        min-height: 25px;

        @include media-breakpoint-up(md) {
            flex-direction: column;
            margin: 0 45px;
            align-items: center;
        }

        @include media-breakpoint-up(lg) {
            margin: 0 0 0 auto;
        }

        @include media-breakpoint-up(xl) {
            margin: 0;
        }

        a:nth-child(1) {
            margin-right: 20px;

            @include media-breakpoint-up(md) {
                margin-bottom: 10px;
                margin-right: 0;
            }
        }

        a:nth-child(3) {
            margin-left: 20px;

            @include media-breakpoint-up(md) {
                margin-top: 10px;
                margin-left: 0;
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

            @include media-breakpoint-up(md) {
                margin-top: 5px;
                margin-bottom: 5px !important;
            }
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

            @include media-breakpoint-up(md) {
                margin-top: 5px;
                margin-bottom: -5px !important;
            }
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

            @include media-breakpoint-up(md) {
                margin-top: 4px;
                margin-bottom: -4px !important;
            }
        }
    }

    &__social-icon {
        transition: opacity 0.3s;

        &:hover {
            opacity: 0;
        }

        &--width {
            width: 20px;
            height: 20px;
            margin-right: 5px;
        }
    }

    &__column-wrapper {
        display: flex;
        flex-direction: column;

        @include media-breakpoint-up(sm) {
            flex-direction: row;
            justify-content: center;
        }

        @include media-breakpoint-up(lg) {
            margin: 0 0 0 60px;
        }

        @include media-breakpoint-up(xl) {
            margin: 0 60px;
        }

        @include media-breakpoint-up(xxl) {
            margin: 0 130px;
        }
    }

    &__second-column {
        @include media-breakpoint-up(sm) {
            margin-left: 10%;
            margin-right: -70px;
        }

        @include media-breakpoint-up(md) {
            margin-right: 0;
            margin-left: 30px;
        }

        @include media-breakpoint-up(lg) {
            margin-left: 60px;
        }
    }

    &__first-column,
    &__second-column {
        display: flex;
        flex-direction: column;
        align-items: center;

        @include media-breakpoint-up(sm) {
            align-items: flex-start;
        }

        a {
            margin-bottom: 10px;
            position: relative;
            width: 380px;
            text-align: center;

            @include media-breakpoint-up(sm) {
                text-align: left;
                width: 130px;
            }

            &:hover:after {
                content: url("../../../assets/icons/star.svg");
                position: absolute;
                width: 23px;
                height: 23px;
                left: 90px;
                animation: rotate 4s;

                @include media-breakpoint-up(sm) {
                    display: none;
                }
            }

            &:hover:before {
                content: url("../../../assets/icons/star.svg");
                position: absolute;
                width: 23px;
                height: 23px;
                right: 90px;
                animation: rotate 4s;

                @include media-breakpoint-up(sm) {
                    right: 140px;
                }
            }
        }
    }

    &__contact-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 20px;

        @include media-breakpoint-up(sm) {
            flex-direction: row;
            justify-content: center;
            align-items: baseline;
        }

        @include media-breakpoint-up(md) {
            flex-direction: column;
            margin-top: 0;
        }

        @include media-breakpoint-up(lg) {
            margin: 0 80px 0 auto;
        }

        @include media-breakpoint-up(xl) {
            margin: 0 auto 0 0;
        }
    }

    &__contact-phone {
        display: flex;
        align-items: center;
        text-decoration: none;
        height: 20px;
        color: $gold-color-400;
        transition: background-image 0.1s;

        &:hover {
            background-image: url("../../../assets/icons/phone-color.svg");
            background-repeat: no-repeat;
            background-size: 20px;
            display: flex;
            color: $gold-color-400;

            .footer__social-icon {
                opacity: 0;
            }
        }
    }

    &__contact-email {
        display: flex;
        align-items: center;
        height: 20px;
        text-decoration: none;
        color: $gold-color-400;
        margin-top: 10px;
        transition: background-image 0.1s;

        @include media-breakpoint-up(sm) {
            margin-left: 20px;
        }

        @include media-breakpoint-up(md) {
            margin-left: 0;
            word-break: break-all;
            line-height: 1;
        }

        &:hover {
            background-image: url("../../../assets/icons/email-color.svg");
            background-repeat: no-repeat;
            background-size: 20px;
            display: flex;
            color: $gold-color-400;

            .footer__social-icon {
                opacity: 0;
            }
        }
    }

    &__copyright {
        font-size: 14px;
        text-align: center;
        color: $gold-color-400;
        margin-top: 20px;
    }
}

@keyframes rotate {
    from {
        transform: rotateZ(0);
    }

    to {
        transform: rotateZ(1060deg);
    }
}
</style>