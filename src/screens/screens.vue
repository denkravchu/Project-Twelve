<template>
    <div class="screens">
        <div class="flow-container" :style="{ transform: `translateY(${this.scrollHeight}vh)` }">
            <project-twelve-screen :class="{'active': delayedActiveScreenNumber === 0}"></project-twelve-screen>
            <organic-sustainable-screen :class="{'active': delayedActiveScreenNumber === 1}"></organic-sustainable-screen>
            <econs-screen :class="{'active': delayedActiveScreenNumber === 2}"></econs-screen>
            <blockchain-veterans-screen :class="{'active': delayedActiveScreenNumber === 3}"></blockchain-veterans-screen>
            <architecture-first-screen :class="{'active': delayedActiveScreenNumber === 4}"></architecture-first-screen>
            <architecture-second-screen :class="{'active': delayedActiveScreenNumber === 5}"></architecture-second-screen>
            <tech-solution-screen :class="{'active': delayedActiveScreenNumber === 6}"></tech-solution-screen>
            <econs-solution-screen :class="{'active': delayedActiveScreenNumber === 7}"></econs-solution-screen>
            <token-economy-screen :class="{'active': delayedActiveScreenNumber === 8}"></token-economy-screen>
            <nomocracy-screen :class="{'active': delayedActiveScreenNumber === 9}"></nomocracy-screen>
            <roadmap-screen :class="{'active': delayedActiveScreenNumber === 10}"></roadmap-screen>
        </div>
    </div>
</template>

<script>
import gsap from 'gsap'

import projectTwelveScreen from './projectTwelveScreen.vue'
import organicSustainableScreen from './organicSustainableScreen.vue'
import econsScreen from './econsScreen.vue'
import blockchainVeteransScreen from './blockchainVeteransScreen.vue'
import architectureFirstScreen from './architectureFirstScreen.vue'
import architectureSecondScreen from './architectureSecondScreen.vue'
import techSolutionScreen from './techSolutionScreen.vue'
import econsSolutionScreen from './econsSolutionScreen.vue'
import tokenEconomyScreen from './tokenEconomyScreen.vue'
import nomocracyScreen from './nomocracyScreen.vue'
import roadmapScreen from './roadmapScreen.vue'

import CustomScrollEvent from '../scripts/customScrollEvent'

export default {
    name: 'screens',

    components: {
        projectTwelveScreen,
        organicSustainableScreen,
        econsScreen,
        blockchainVeteransScreen,
        architectureFirstScreen,
        architectureSecondScreen,
        techSolutionScreen,
        econsSolutionScreen,
        tokenEconomyScreen,
        nomocracyScreen,
        roadmapScreen
    },

    mounted() {
        const customScroll = new CustomScrollEvent
        customScroll.mouseWheel()
        customScroll.touchMove()
        document.addEventListener('scroll', this.handleScroll)
    },

    data() {
        return {
            scrollingScreen: false,
            activeScreenNumber: 0,
            delayedActiveScreenNumber: 0,
            screensCount: 11,
            screenScrollTimingFunction: 'power2.inOut',
            screenHeight: 100, //vh
            scrollingTime: 1000,
            scrollHeight: 0,
            wheeling: false,
            checkingWheelingTimeout: null,
            enableFastScrollTimeout: null
        }
    },

    methods: {
        handleScroll(event) {
            this.stopWheelingIfWheelEventStopped()
            const direction = event.detail.direction
            const nextScreenNumber = this.activeScreenNumber - direction

            if (!this.isEnableToScroll(nextScreenNumber)) { return }
            if (this.scrollingScreen) { return }
            if (this.wheeling) { return }

            console.log('---> scrolling!')
            this.wheeling = true
            this.scrollingScreen = true

            this.activeScreenNumber = nextScreenNumber
            this.animateScrollHeight()

            setTimeout(function() {
                this.scrollingScreen = false
                console.log('---> ready to scroll')
            }.bind(this), this.scrollingTime)

            // delayed active screen for starting animation on the middle of timeline
            setTimeout(function() {
                this.delayedActiveScreenNumber = this.activeScreenNumber
            }.bind(this), this.scrollingTime / 2)

            // if the previous scroll finished but the wheeling still going, may be some one scrolling without stopping, so i give him this opportunity)
            clearTimeout(this.enableFastScrollTimeout)
            this.enableFastScrollTimeout = setTimeout(function() {
                clearTimeout(this.checkingWheelingTimeout)
                this.wheeling = false
            }.bind(this), this.scrollingTime + 1500)
        },

        isEnableToScroll(nextScreenNumber) {
            return (nextScreenNumber >= 0 && nextScreenNumber < this.screensCount)
        },

        stopWheelingIfWheelEventStopped() {
            // i check if user stopped wheeling, it fixes bug when u r not scrolling but the wheeling event is still working
            if (this.wheeling) {
                clearTimeout(this.checkingWheelingTimeout)
                this.checkingWheelingTimeout = setTimeout(function() {
                    this.wheeling = false
                }.bind(this), 300)
            }
        },

        animateScrollHeight() {
            const newScrollHeight = this.screenHeight * this.activeScreenNumber * -1
            const timeline = gsap.timeline()
            timeline.to({ y: this.scrollHeight }, {
                y: newScrollHeight,
                ease: this.screenScrollTimingFunction,
                duration: this.scrollingTime / 1000,
                onUpdate: function() {
                    this.scrollHeight = timeline.getChildren()[0].targets()[0].y
                }.bind(this),
                onComplete() {
                    timeline.kill()
                }
            })
        }
    },
}
</script>

<style lang='scss'>
    .screens {
        overflow: hidden;
        max-height: 100vh;
    }

    .flow-container {
        & > div:nth-child(n + 1) {
            position: relative;
            width: 100%;
            height: 100vh;
            padding: 0 spacing(84);
        }

        & > div:nth-child(2n) {
            background: rgba(color('white'), 50%);
        }
    }
</style>
