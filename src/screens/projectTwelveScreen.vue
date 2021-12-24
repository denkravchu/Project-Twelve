<template>
    <div class="project-twelve">
    </div>
</template>

<script>
export default {
    name: 'projectTwelveScreen',

    mounted() {
        this.isMobile = this.isMobileWidth()
        window.addEventListener('resize', function() {
            this.isMobile = this.isMobileWidth()
        }.bind(this))
    },

    data() {
        return {
            adaptivePointSm: 576,
            isMobile: true
        }
    },

    methods: {
        isMobileWidth() {
            return window.innerWidth < this.adaptivePointSm
        },
    }
}
</script>

<style lang='scss'>

</style>
