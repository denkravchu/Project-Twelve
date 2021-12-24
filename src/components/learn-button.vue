<template>
    <a class="learn-button" href="#">
        <span>Learn more</span>
        <span class="icon">
            <svg width="65" height="48" viewBox="0 0 65 48" fill="rgba(5, 0, 255, 0)" xmlns="http://www.w3.org/2000/svg">
                <rect x="17.5" y="0.5" width="47" height="47" stroke="#0500FF"/>
                <path class="tip" d="M37.9299 17.9999L43.9999 24.0699L37.9299 30.1399" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="square" stroke-linejoin="bevel"/>
                <path class="cane" d="M1 24L43 24" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="square" stroke-linejoin="round"/>
            </svg>
        </span>
    </a>
</template>

<script>
export default {
    name: 'learnButton',
}
</script>

<style lang="scss">
    .learn-button {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        @include font-bold;
        font-size: font(16);
        letter-spacing: 0.3em;
        text-transform: uppercase;
        text-decoration: none;
        color: color('white');
        cursor: pointer;

        .icon {
            display: block;
            width: 4rem;
            height: 3rem;
            margin-left: 1.5rem;

            svg {
                display: block;
                width: 100%;
                height: 100%;
                min-width: 100%;
                min-height: 100%;
            }
        }
    }

    .learn-button {
        --transition-time: .3s;
        > span {
            transition: opacity var(--transition-time) ease, 
                        transform var(--transition-time) ease;
        }

        rect {
            transition: fill var(--transition-time) ease;
        }
    }

    .learn-button:hover {
        > span {
            opacity: .8;
        }

        > .icon {
            transform: translate3d(-4px, 0, 0);
        }

        > .icon > svg > rect {
            fill: rgba(color('blue'), 1)
        }
    }
</style>
