<template>
    <nav class='navigation-bar' :class="{ active: isNavbarActive }">
        <div class="navigation-bar__offset-container">
            <div class="navigation-bar__flow-container" :style="{ transform: `translate3d(${navbarTranslate}px, 0, 0)` }">
                <div v-if="isMobileWidth()" class="header">
                    <div class="logo">
                        <img src="../assets/logo.png" alt="logo">
                    </div>
                    <div @click="this.$emit('closeNavbar', false)" class="close">
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M26.5 1.5L2 26" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
                            <path d="M2 1.5L26.5 26" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
                        </svg>
                    </div>
                </div>
                <div v-for="(navButton, idx) in navButtons" 
                    @click="this.$emit('openScreen', idx)"
                    :key="idx" 
                    class="nav-button"
                    :class="{
                        'active': activeScreenNumber === idx, 
                    }"
                    :ref="navButton"
                ><span>{{ navButton }}</span></div>
                <div v-if="isMobileWidth()" class="footer">
                    <a href="#" class="twitter">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M32 6.08407C30.8232 6.60524 29.5591 6.95738 28.2301 7.11655C29.6013 6.29648 30.6272 5.00577 31.1164 3.48528C29.828 4.25011 28.418 4.78847 26.9476 5.07695C25.9588 4.02175 24.6491 3.32234 23.2218 3.08732C21.7945 2.8523 20.3296 3.09481 19.0543 3.7772C17.7791 4.4596 16.7649 5.5437 16.1693 6.86118C15.5737 8.17867 15.43 9.65584 15.7604 11.0633C13.1499 10.9323 10.5961 10.2542 8.26485 9.07291C5.93354 7.89163 3.87681 6.23361 2.22813 4.20646C1.66441 5.17837 1.34026 6.30522 1.34026 7.50532C1.33963 8.58568 1.60582 9.64949 2.11522 10.6024C2.62461 11.5552 3.36145 12.3677 4.26037 12.9677C3.21787 12.9346 2.19836 12.653 1.28671 12.1465V12.231C1.2866 13.7463 1.81102 15.2149 2.77098 16.3877C3.73094 17.5605 5.06731 18.3652 6.55333 18.6654C5.58624 18.927 4.57231 18.9655 3.58813 18.778C4.0074 20.0818 4.82409 21.2219 5.92389 22.0388C7.02368 22.8556 8.35151 23.3082 9.72148 23.3333C7.39587 25.158 4.52376 26.1478 1.56716 26.1434C1.04343 26.1436 0.520146 26.113 0 26.0519C3.00111 27.9804 6.49462 29.004 10.0625 29C22.1404 29 28.7431 19.002 28.7431 10.3309C28.7431 10.0492 28.736 9.76465 28.7233 9.48294C30.0076 8.55466 31.1162 7.40516 31.9972 6.0883L32 6.08407V6.08407Z" fill="white"/>
                        </svg>
                    </a>
                    <a href="#" class="telegram">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M28.9076 2.17753L1.44751 13.1744C-0.426527 13.9561 -0.415685 15.0418 1.10368 15.526L8.15377 17.81L24.4656 7.12188C25.2369 6.63452 25.9416 6.8967 25.3624 7.4307L12.1465 19.8173H12.1434L12.1465 19.8189L11.6602 27.3657C12.3727 27.3657 12.6871 27.0263 13.0867 26.6258L16.511 23.1677L23.6339 28.6316C24.9473 29.3827 25.8905 28.9967 26.2173 27.3689L30.8931 4.48404C31.3717 2.49118 30.1605 1.58884 28.9076 2.17753V2.17753Z" fill="white"/>
                        </svg>
                    </a>
                    <a href="#" class="discord">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M26.413 6.91825C24.4456 6.01035 22.3642 5.36525 20.2239 5C19.9573 5.47537 19.6458 6.11475 19.431 6.62341C17.1234 6.28118 14.8369 6.28118 12.5717 6.62341C12.357 6.11486 12.0385 5.47537 11.7694 5C9.62699 5.36542 7.54382 6.01216 5.57547 6.92298C1.6586 12.7607 0.596759 18.4533 1.12762 24.0653C3.72555 25.9787 6.2432 27.141 8.71844 27.9016C9.3336 27.0673 9.87738 26.184 10.3442 25.2608C9.45546 24.9271 8.59871 24.5159 7.7841 24.032C7.99847 23.8753 8.2078 23.712 8.41176 23.5423C13.3479 25.8194 18.7114 25.8194 23.5887 23.5423C23.7936 23.7108 24.0028 23.8741 24.2163 24.032C23.4003 24.5171 22.542 24.9292 21.6515 25.2632C22.1209 26.1902 22.6638 27.0743 23.2772 27.904C25.7548 27.1435 28.2748 25.9811 30.8727 24.0653C31.4957 17.5596 29.8087 11.9192 26.413 6.91813V6.91825ZM11.0167 20.614C9.53488 20.614 8.31965 19.2496 8.31965 17.5882C8.31965 15.9267 9.50899 14.56 11.0167 14.56C12.5246 14.56 13.7397 15.9243 13.7138 17.5882C13.7161 19.2496 12.5246 20.614 11.0167 20.614ZM20.9836 20.614C19.5018 20.614 18.2867 19.2496 18.2867 17.5882C18.2867 15.9267 19.4759 14.56 20.9836 14.56C22.4915 14.56 23.7066 15.9243 23.6807 17.5882C23.6807 19.2496 22.4915 20.614 20.9836 20.614V20.614Z" fill="white"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>

        <div class="navigation-bar__active"></div>
    </nav>
</template>

<script>
import gsap from 'gsap'

export default {
    name: 'navigationBar',
    data() {
        return {
            adaptivePointSm: 576,
            scrollingTime: 1000,
            navbarTimmingFunction: 'ease.inOut',
            navButtons: ['Project 12', 'Overview', 'Econs', 'Gap', 'Architecture', 'Architecture', 'Tech', 'Econs', 'Token Economy', 'Nomocracy', 'Roadmap'],
            navbarTranslate: 0,
            navbarAppearTimmingFunction: 'ease.inOut',
            navbarAppearTime: 500,
        }
    },
    created() {
        this.$watch('activeScreenNumber', this.animateNavbarTranslate)
    },
    mounted() {
        this.navbarTranslate = this.calculateNavbarTranslate()
        window.addEventListener('resize', function() {
            this.navbarTranslate = this.calculateNavbarTranslate()
        }.bind(this))
    },
    props: {
        activeScreenNumber: {
            type: Number,
            required: true
        },
        isNavbarActive: {
            type: Boolean,
            required: true
        }
    },

    methods: {
        animateNavbarTranslate() {
            const newNavbarTranslate = this.calculateNavbarTranslate()
            const timeline = gsap.timeline()
            timeline.to({ y: this.navbarTranslate }, {
                y: newNavbarTranslate,
                ease: this.navbarTimmingFunction,
                duration: this.scrollingTime / 1000,
                onUpdate: function() {
                    this.navbarTranslate = timeline.getChildren()[0].targets()[0].y
                }.bind(this),
                onComplete() {
                    timeline.kill()
                }
            })
        },
        calculateNavbarTranslate() {
            const navbarButtonsStyle = []
            let newNavbarTranslate = 0

            if (this.isMobileWidth()) return 0
            
            this.navButtons.forEach(buttonName => {
                navbarButtonsStyle.push({
                    height: this.$refs[buttonName].getBoundingClientRect().height,
                    marginLeft: parseInt(getComputedStyle(this.$refs[buttonName]).marginLeft)
                })
            })

            const translatedNavbarButtonsStyle = navbarButtonsStyle.slice(0, this.activeScreenNumber)
            translatedNavbarButtonsStyle.forEach(button => {
                newNavbarTranslate += button.height + button.marginLeft
            })

            if (navbarButtonsStyle[this.activeScreenNumber]) {
                newNavbarTranslate += navbarButtonsStyle[this.activeScreenNumber].height
            }

            return newNavbarTranslate
        },
        isMobileWidth() {
            return window.innerWidth < this.adaptivePointSm
        },
        animateNavbarModal(startOpacity, endOpacity, cb) {
            const timeline = gsap.timeline()
            timeline.to({ y: startOpacity }, {
                y: endOpacity,
                ease: this.navbarAppearTimmingFunction,
                duration: this.navbarAppearTime / 1000,
                onUpdate: function() {
                    this.navbarOpacity = timeline.getChildren()[0].targets()[0].y
                }.bind(this),
                onComplete() {
                    if (typeof cb === 'function') cb()
                    timeline.kill()
                }
            })
        },
    }
}
</script>

<style lang='scss'>
    .navigation-bar {
        position: absolute;
        top: 50%; left: 5rem;
        width: 100vh;
        height: 2.25rem;
        transform: translate3d(-50%, -50%, 0) rotate(-90deg);
        overflow: hidden;
        z-index: 10;

        @media screen and (max-width: point(sm)) {
            transform: none;
            left: 0; top: 0;
            width: 100%;
            height: 100%;
            padding: 3rem 2rem;
            background: rgba(color('blue-dark'), 54%);
            backdrop-filter: blur(73px);
            opacity: 0;
            visibility: hidden;
            transform: translate3d(0, 100%, 0);
            transition: transform .5s ease, opacity .5s ease, visibility .5s ease;
        }

        .nav-button {
            @include font-regular;
            font-size: font(18);
            opacity: .3;
            transition: opacity .5s ease;
            cursor: pointer;
            white-space: nowrap;

            @media screen and (max-width: point(sm)) {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                font-size: font(24);
            }

            > span {
                display: block;
                transform: scale(.8);
                transition: transform 1s ease;

                @media screen and (max-width: point(sm)) {
                    transform: scale(1);
                    transition: transform 0s;
                }
            }

            &:hover {
                opacity: .7;
            }

            @media screen and (max-width: point(sm)) {
                &:before {
                    content: '';
                    display: block;
                    width: 2.5625rem;
                    height: .25rem;
                    background: linear-gradient(90deg, #9796F0 0%, #FBC7D4 100%);
                    margin-right: 0;
                    max-width: 0;
                    transition: max-width 1s ease, margin-right 1s ease;
                }
            }
        }

        .nav-button.active {
            opacity: 1;
            visibility: visible;

            > span {
                transform: scale(1);
            }

            &:hover {
                opacity: 1;
            }

            @media screen and (max-width: point(sm)) {
                &:before {
                    margin-right: 1rem;
                    max-width: 2rem;
                }
            }
        }

        .nav-button:nth-child(n + 3) {
            @media screen and (max-width: point(sm)) {
                margin-top: 1rem;
            }
        }

        .nav-button:not(:last-child) {
            margin-left: 6rem;

            @media screen and (max-width: point(sm)) {
                margin-left: 0;
            }
        }

    }

    .navigation-bar.active {
        @media screen and (max-width: point(sm)) {
            opacity: 1;
            visibility: visible;
            transform: translate3d(0, 0, 0);
        }
    }

    .navigation-bar__offset-container {
        position: absolute;
        width: 100%;
        height: 100%;
        right: 50%;
        top: 0;

        @media screen and (max-width: point(sm)) {
            right: 0;
        }
    }

    .navigation-bar__flow-container {
        position: absolute;
        display: flex;
        justify-content: flex-start;
        flex-direction: row-reverse;
        align-items: center;
        will-change: transform;
        contain: layout;
        right: 0; top: 0;
        // padding-top: .5rem;

        @media screen and (max-width: point(sm)) {
            flex-direction: column;
            align-items: flex-start;
            width: 100%;
            height: 100%;
            padding: 3rem 2rem;
        }
    }
    


    .navigation-bar__active {
        position: absolute;
        width: 1.25rem;
        height: 2px;
        background: color('white');
        left: 50%;
        bottom: 0;

        @media screen and (max-width: point(sm)) {
            display: none;
        }
    }

    .navigation-bar .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin-bottom: 2rem;

        .logo {
            img {
                width: 3.25rem;
                height: auto;
            }
        }

        .close {
            width: 1.625rem;
            height: 1.625rem;

            svg, img {
                width: 100%;
                height: 100%;
                min-width: 100%;
                min-height: 100%;
            }

        }
    }

    .navigation-bar .footer {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-top: auto;

        a {
            display: block;
            width: 2rem;
            height: 2rem;

            svg, img {
                width: 100%;
                height: 100%;
                min-width: 100%;
                min-height: 100%;
            }
        }

        a:not(:first-child) {
            margin-left: 2rem;
        }
    }

</style>
