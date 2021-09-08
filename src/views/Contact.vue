<template>
    <layout>
        <div class="contact">
            <h1 class="contact__title">Contact information:</h1>
            <div class="contact__wrapper">
                <div class="contact__name">Mateusz Kraska</div>
                <a href="tel:+48792320103" class="contact__contact-phone">
                    <img src="../assets/icons/phone.svg" alt="phone" class="contact__social-icon contact__social-icon--width"> tel: 792 320 103
                </a>
                <a href="mailto:mateusz.kraska.95@gmail.com?subject=AdduEmail:" class="contact__contact-email">
                    <img src="../assets/icons/email.svg" alt="email" class="contact__social-icon contact__social-icon--width"> e-mail: mateusz.kraska.95@gmail.com
                </a>
                <a href="https://www.google.com/maps/place/J%C3%B3zefa+%C5%81epkowskiego+5,+30-001+Krak%C3%B3w/@50.0896257,19.9622051,19z/data=!4m5!3m4!1s0x47165aedda1f6a7d:0xa5c9bb551b3d98fb!8m2!3d50.0897875!4d19.9618162"
                   class="contact__address" target="_blank">address: Łepkowskiego 5/22, 31-423 Kraków
                </a>
            </div>
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

.contact {
    display: flex;
    flex-direction: column;
    background-color: $gold-color-500;
    background-image: linear-gradient(315deg, $gold-color-500 0%, $black-color-900 15%);
    padding: 50px 10px;
    color: $gold-color-400;

    @include media-breakpoint-up(sm) {
        padding: 70px 10px;
    }

    @include media-breakpoint-up(md) {
        padding: 120px 10px;
    }

    @include media-breakpoint-up(lg) {
        padding: 175px 10px;
    }

    &__title {
        text-align: center;
        font-size: 40px;
        margin-bottom: 50px;
    }

    &__wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 18px;
    }

    &__name {
        margin-left: 24px;
        font-size: 24px;
        margin-bottom: 10px;
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

    &__contact-phone {
        display: flex;
        align-items: center;
        text-decoration: none;
        height: 20px;
        color: $gold-color-400;
        transition: background-image 0.1s;

        &:hover {
            background-image: url("../assets/icons/phone-color.svg");
            background-repeat: no-repeat;
            background-size: 20px;
            display: flex;
            color: $gold-color-400;

            .contact__social-icon {
                opacity: 0;
            }
        }
    }

    &__contact-email {
        display: flex;
        align-items: center;
        text-align: center;
        height: 20px;
        text-decoration: none;
        color: $gold-color-400;
        margin-top: 20px;
        transition: background-image 0.1s;

        @include media-breakpoint-up(md) {
            margin-left: 0;
            word-break: break-all;
            line-height: 1;
        }

        &:hover {
            background-image: url("../assets/icons/email-color.svg");
            background-repeat: no-repeat;
            background-size: 20px;
            display: flex;
            color: $gold-color-400;

            .contact__social-icon {
                opacity: 0;
            }
        }
    }

    &__address {
        margin-top: 20px;
        text-align: center;
        color: $gold-color-400;
        text-decoration: none;
        transition: opacity 0.3s;

        &:hover {
            color: $gold-color-400;
            opacity: 0.5;
        }
    }
}
</style>