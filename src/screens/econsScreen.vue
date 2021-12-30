<template>
    <div class="econs">
        <div class="econs__description">
            <p class="screen-subtitle">Economy</p>
            <h2 class="screen-title">Econs</h2>
            <div class="text-block">
                <p>Being a more immersive<br>and all-compassing virtual world.</p>
                <p>Metaverse is fated to have a full-fledged Economy system. With such economic elements, citizens of the Metaverse will not be trusting centralized commercial companies with their valuable assets. Even the biggest companies, including those holding self-righteous claims such as “Don’t Do Evil”, have a long history of manipulating, confiscating and discarding users’ assets; not to mention killing products.</p>
            </div>
            <div class="stages">
                <p>01</p>
                <div class="line"></div>
                <p>03</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'econsScreen',
    data() {
        return {

        }
    }
}
</script>

<style lang='scss'>
    .econs {
        position: relative;
        display: flex;
        justify-content: flex-start;
        align-items: center;

        &:before {
            content: '';
            display: block;
            position: absolute;
            background: url(../assets/images/blur-2.png) no-repeat;
            background-size: contain;
            background-position: center;
            opacity: .5;
            width: 100vw;
            height: 100vh;
            left: 0;
            top: 0;
            border-radius: 50%;
            z-index: 1;

            @media screen and (max-width: point(sm)) {
                display: none;
            }
        }

        &:after {
            content: '';
            display: block;
            position: absolute;
            background: url(../assets/images/blur-3.png) no-repeat;
            background-size: contain;
            background-position: center;
            opacity: .7;
            width: 150vh;
            height: 150vh;
            right: -50vh;
            top: -25vh;
            border-radius: 50%;
            z-index: 1;

            @media screen and (max-width: point(sm)) {
                display: none;
            }
        }
    }

    .econs__description {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        flex: 1;
        z-index: 1;

        .screen-title {
            margin-top: 1rem;
        }

        .text-block {
            margin-top: 2.9375rem;

            @media screen and (max-width: point(sm)) {
                margin-top: 2rem;
            }

            p:first-child {
                position: relative;
                @include font-azonix;
                font-size: font(22);
                line-height: 1.625rem;

                @media screen and (max-width: point(sm)) {
                    font-size: font(16);
                    line-height: 1.25rem;
                }
            }
            p:last-child {
                @include font-regular;
                font-size: font(14);
                max-width: 31.125rem;
                margin-top: 2.75rem;
                line-height: 1.4375rem;
                color: rgba(color('white'), 80%);

                @media screen and (max-width: point(sm)) {
                    margin-top: 2rem;
                }
            }
        }
        .stages {
            position: relative;
            @include font-azonix;
            font-size: font(22);
            margin-top: 6.625rem;
            display: flex;
            justify-content: space-between;
            align-items: center;

            @media screen and (max-width: point(sm)) {
                margin-top: 4.5rem;

                @media screen and (min-aspect-ratio: 320 / 600) {
                    display: none;
                }
            }

            &:before {
                content: '';
                display: block;
                position: absolute;
                width: 7rem;
                height: 7rem;
                border-radius: 50%;
                background: rgba(color('white'), 1%);
                box-shadow: inset -10px 14px 20px rgba(255, 255, 255, 0.08);
                backdrop-filter: blur(44px);
                z-index: -1;
                top: 50%; left: -2.75rem;
                transform: translateY(-50%);
            }

            .line {
                width: 3.375rem;
                height: 2px;
                background: color('white');
                margin: 0 1.3125rem;
            }
        }
    }

    // animation styles before
    $content: (
        '.screen-subtitle',
        '.screen-title',
        '.text-block p:first-child',
        '.text-block p:last-child',
        '.stages'
    );
    .econs {
        @for $i from 1 through 5 {
            $class: nth($content, $i);

            #{$class} {
                transition: var(--content-appear-time) transform #{$i / 10}s, var(--content-appear-time) opacity #{$i / 10}s;
                transform: translate3d(0, 5rem, 0);
                opacity: 0;
            }
        }

        &:before, &:after {
            opacity: 0;
            transition: var(--content-appear-time) opacity;
        }
    }
    // animation styles after
    .econs.active {
        @for $i from 1 through 5 {
            $class: nth($content, $i);

            #{$class} {
                transform: translate3d(0, 0, 0);
                opacity: 1;
            }
        }

        &:before {
            opacity: .5;
        }
        &:after {
            opacity: .7;
        }
    }

</style>
