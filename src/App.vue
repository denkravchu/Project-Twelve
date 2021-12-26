<template>
  <div class="main">
    <screens :delayedActiveScreenNumber='delayedActiveScreenNumber' :scrollHeight='scrollHeight'></screens>
    <navigation-bar @openScreen='openScreen' @closeNavbar='isNavbarActive = $event' :activeScreenNumber='activeScreenNumber' :isNavbarActive='isNavbarActive'></navigation-bar>
    <header-bar @openNavbar='isNavbarActive = $event' :isNavbarActive='isNavbarActive'></header-bar>
  </div>
</template>

<script>
import gsap from 'gsap'
import CustomScrollEvent from './scripts/customScrollEvent'

import screens from './screens/screens.vue'
import navigationBar from './components/navigation-bar.vue'
import headerBar from './components/header-bar.vue'

export default {
  name: 'App',

  components: {
      screens,
      navigationBar,
      headerBar,
  },

  data() {
    return {
      activeScreenNumber: 0,
      delayedActiveScreenNumber: -1,
      screensCount: 11,
      screenScrollTimingFunction: 'power2.inOut',
      screenHeight: 100, //vh
      scrollingTime: 1000,
      scrollHeight: 0,
      scrollingScreen: false,
      wheeling: false,
      checkingWheelingTimeout: null,
      enableFastScrollTimeout: null,
      isNavbarActive: false,
    }
  },

  mounted() {
        const customScroll = new CustomScrollEvent
        customScroll.mouseWheel()
        customScroll.touchMove()
        document.addEventListener('scroll', this.handleScroll)
        this.delayedActiveScreenNumber = 0
  },

  computed: {
    newScrollHeight() {
      return this.screenHeight * this.activeScreenNumber * -1
    },
  },

  methods: {
    handleScroll(event) {
            this.stopWheelingIfWheelEventStopped()
            const direction = event.detail.direction
            const nextScreenNumber = this.activeScreenNumber - direction

            this.setScroll(nextScreenNumber)
    },

    setScroll(nextScreenNumber) {
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
            }.bind(this), this.scrollingTime + 1200);
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
            const timeline = gsap.timeline()
            timeline.to({ y: this.scrollHeight }, {
                y: this.newScrollHeight,
                ease: this.screenScrollTimingFunction,
                duration: this.scrollingTime / 1000,
                onUpdate: function() {
                    this.scrollHeight = timeline.getChildren()[0].targets()[0].y
                }.bind(this),
                onComplete() {
                    timeline.kill()
                }
            })
    },
    
    openScreen(activeScreenNumber) {
      if (this.activeScreenNumber === activeScreenNumber) return
      this.setScroll(activeScreenNumber)
    }
  }
}
</script>

<style lang="scss">
  .main {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100vh;
    max-height: 100vh;
  }
</style>
