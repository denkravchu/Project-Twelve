<template>
  <div class="main">
    <screens></screens>
    <navigation-bar></navigation-bar>
  </div>
</template>

<script>
import screens from './screens/screens.vue'
import navigationBar from './components/navigation-bar.vue'

export default {
  name: 'App',

  components: {
    screens,
    navigationBar
  },

}
</script>

<style lang="scss">
  main {
    display: flex;
    justify-content: space-between;
  }
</style>
