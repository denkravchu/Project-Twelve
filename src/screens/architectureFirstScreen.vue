<template>
    <div class="architecture-first">
        <div class="architecture-first__description">
            <p class="screen-subtitle">Solution</p>
            <h2 class="screen-title">Architecture</h2>
            <img class="desktop" src="../assets/images/citizens.png" alt="citizens">
            <img class="mobile" src="../assets/images/citizens-mobile.png" alt="citizens">
        </div>
    </div>
</template>

<script>
export default {
    name: 'architectureFirstScreen',
    data() {
        return {

        }
    }
}
</script>

<style lang='scss'>
    .architecture-first {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: stretch;

        &:before {
            content: '';
            display: block;
            position: absolute;
            background: url(../assets/images/blur-1.png) no-repeat;
            background-size: contain;
            background-position: center;
            width: 150vh;
            height: 150vh;
            left: -75vh;
            top: -25vh;
            opacity: .7;
            z-index: 1;
        }
    }
    .architecture-first__description {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        z-index: 1;
        width: 100%;

            @media screen and (min-width: point(sm)) {
                @media screen and (min-aspect-ratio: 908 / 929) {
                    justify-content: flex-start;
                }
            }

        .screen-subtitle {
            margin-top: 2rem;
        }

        .screen-title {
            position: relative;
            margin-top: 1rem;

            &:before {
                content: '';
                display: block;
                position: absolute;
                background: url(../assets/svg/projecttwelve.svg) no-repeat;
                background-size: contain;
                background-position: center;
                width: 18.4375rem;
                height: 10rem;
                z-index: -1;
                left: 0;
                top: calc(100% + 2rem);

                @media screen and (max-width: point(sm)) {
                    width: 10rem;
                    height: 5rem;
                }
            }
        }
        
        &:before {
                content: '';
                display: block;
                position: absolute;
                background: url(../assets/images/blur-5.png) no-repeat;
                background-size: contain;
                background-position: center;
                width: 100%;
                height: 100%;
                left: 0%;
                top: 0%;
                opacity: .7;
                z-index: -2;
        }

        img {
            max-height: 90vh;
            max-width: 80vw;
            width: auto;
            z-index: -1;
            right: 0;
            bottom: 0;

            @media screen and (min-width: point(sm)) {
                @media screen and (min-aspect-ratio: 908 / 929) {
                    position: absolute;
                }
            }


            @media screen and (max-width: point(sm)) {
                max-width: 100vw;
                margin-left: -2rem;

                @media screen and (min-aspect-ratio: 431 / 781) {
                    max-width: 80vw;
                    margin-left: 0;
                }
                @media screen and (min-aspect-ratio: 431 / 600) {
                    max-width: 60vw;
                    margin: 0 auto;
                }
            }
        }

        img.mobile {
            display: none;

            @media screen and (max-width: point(sm)) {
                display: block;
            }
        }

        img.desktop {
            @media screen and (max-width: point(sm)) {
                display: none;
            }
        }
    }

    // animation styles before
    $content: (
        '.screen-subtitle',
        '.screen-title',
        'img',
    );
    .architecture-first {
        @for $i from 1 through 3 {
            $class: nth($content, $i);

            #{$class} {
                transition: var(--content-appear-time) transform #{$i / 10}s, var(--content-appear-time) opacity #{$i / 10}s;
                transform: translate3d(0, 5rem, 0);
                opacity: 0;
            }
        }

        &:before, &:after, .architecture-first__description:before {
            opacity: 0;
            transition: var(--content-appear-time) opacity;
        }
    }
    // animation styles after
    .architecture-first.active {
        @for $i from 1 through 3 {
            $class: nth($content, $i);

            #{$class} {
                transform: translate3d(0, 0, 0);
                opacity: 1;
            }
        }

        &:before {
            opacity: .5;
        }
        &:after, .architecture-first__description:before {
            opacity: .7;
        }
    }
</style>
