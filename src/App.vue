<template>
  <div class="main">
    <screens @activeScreen='activeScreenNumber = $event' :activeScreenNumber='activeScreenNumber'></screens>
    <navigation-bar @openScreen='openScreen' @closeNavbar='isNavbarActive = $event' :activeScreenNumber='activeScreenNumber' :isNavbarActive='isNavbarActive'></navigation-bar>
    <header-bar @openNavbar='isNavbarActive = $event' :isNavbarActive='isNavbarActive'></header-bar>
  </div>
</template>

<script>
import screens from './screens/screens.vue'
import navigationBar from './components/navigation-bar.vue'
import headerBar from './components/header-bar.vue'

export default {
  name: 'App',

  data() {
    return {
      activeScreenNumber: 0,
      isNavbarActive: false
    }
  },

  components: {
      screens,
      navigationBar,
      headerBar,
  },

  methods: {
    openScreen(activeScreenNumber) {
      if (this.activeScreenNumber === activeScreenNumber) return
      this.activeScreenNumber = activeScreenNumber
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
