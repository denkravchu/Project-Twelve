<template>
    <div class="screens">
        <div class="screens__flow-container" :style="{ transform: `translate3d(0, ${scrollHeight}vh, 0)` }">
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


    data() {
        return {
        }
    },

    props: {
        delayedActiveScreenNumber: {
            type: Number,
            required: true
        },
        scrollHeight: {
            type: Number,
            required: true
        },
    },

    methods: {

    },
}
</script>

<style lang='scss'>
    .screens {
        overflow: hidden;
        max-height: 100vh;
        z-index: 5;
    }

    .screens__flow-container {
        & > div:nth-child(n + 1) {
            position: relative;
            width: 100%;
            height: 100vh;
            padding-left: 14.5rem;
            padding-top: 6rem;
            padding-bottom: 2rem;
            padding-right: 4rem;

            @media screen and (max-width: point(sm)) {
                padding: 2rem;
                @media screen and (min-aspect-ratio: 320 / 600) {
                    padding-top: 6rem;
                }
            }
        }
    }
</style>
