<template>
    <div :style="{opacity: setOpacity}" class="main-header">
        <div class="logo">
            <img src="../assets/logo.png" alt="logo">
        </div>
        <div class="links">
            <a v-for="(link, idx) in links" 
            :key="idx"
            :href="link.href"
            >{{ link.title }}</a>
        </div>
        <a href="#" class="button">Learn More</a>
        <div @click="this.$emit('openNavbar', true)" class="button-menu">
            <svg width="47" height="25" viewBox="0 0 47 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M45 1.42383H2" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
                <path d="M45 11.8481H24.1515" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
                <path d="M45 23.5752H13.7273" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
            </svg>
        </div>
    </div>
</template>

<script>
export default {
    name: 'headerBar',
    data() {
        return {
            links: [
                { title: 'Loream Impsum', href: '#' },
                { title: 'Loream Impsum', href: '#' },
                { title: 'Loream Impsum', href: '#' },
            ]
        }
    },
    props: {
        isNavbarActive: {
            type: Boolean,
            required: true
        }
    },
    computed: {
        setOpacity() {
            return this.isNavbarActive ? 0 : 1
        }
    }
}
</script>

<style lang='scss'>
    .main-header {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 2rem 4rem;
        background: linear-gradient(180deg, color('blue-dark') 25%, rgba(color('blue-dark'), 0.75) 55%, rgba(color('blue-dark'), 0) 90%);
        top: 0; left: 0;
        z-index: 11;
        transition: opacity .3s ease;

        @media screen and (max-width: point(sm)) {
            z-index: 9;
            padding: 3rem 2rem;
        }

        .logo {
            img {
                width: 5.375rem;
                height: auto;

                @media screen and (max-width: point(sm)) {
                    width: 3.25rem;
                }
            }
        }

        .links {
            @include font-regular;
            font-size: font(16);
            margin-left: 5.25rem;   
            margin-right: auto;

            @media screen and (max-width: point(sm)) {
                display: none;
            }

            a {
                display: inline-block;
                transition: opacity .3s ease, transform .3s ease;
            }

            a:not(:first-child) {
                margin-left: 3.5rem;
            }

            a:hover {
                opacity: .8;
                transform: translate3d(0, -2px, 0);
            }
        }

        .button {
            padding: 1.25rem 3.125rem;
            border: 1px solid color('white');
            transition: background-color .3s ease, color .3s ease;
            @media screen and (max-width: point(sm)) {
                display: none;
            }

            &:hover {
                background-color: color('white');
                color: color('blue-dark');
            }
        }

        .button-menu {
            display: none;
            @media screen and (max-width: point(sm)) {
                width: 2.6875rem;
                height: 1.375rem;
                display: block;
                margin-left: auto;

                svg, img {
                    width: 100%;
                    height: 100%;
                    min-width: 100%;
                    min-height: 100%;
                }
            }
        }

        a {
            text-decoration: none;
            color: color('white')
        }
    }

</style>
